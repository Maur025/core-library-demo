import { inject, Injectable } from '@angular/core'
import { AuthUser, User } from 'core-models'
import { KeycloakService } from 'keycloak-angular'
import { KeycloakTokenParsed } from 'keycloak-js'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class KeycloakAuthService {
	private readonly keycloakService = inject(KeycloakService)

	private readonly _currentUser = new BehaviorSubject<AuthUser>({
		authorization: '',
		user: new User(''),
	})

	constructor() {
		const currentUserLocalStorage: string | null =
			localStorage.getItem('currentUserKNB')

		if (currentUserLocalStorage) {
			this._currentUser.next(JSON.parse(currentUserLocalStorage))
		}
		this.keycloakService.getKeycloakInstance()
	}

	getKeycloakData = (): void => {
		const keycloakInstance = this.keycloakService?.getKeycloakInstance()

		if (!keycloakInstance.authenticated) {
			return
		}

		try {
			const tokenParsed: KeycloakTokenParsed | undefined =
				keycloakInstance.idTokenParsed

			console.log(tokenParsed)
		} catch (error) {
			console.error('Error get keycloak-user data: ', error)
		}
	}

	getCurrentUser = (): Observable<AuthUser> => {
		return this._currentUser.asObservable()
	}

	setCurrentUser = (receivedData: AuthUser): void => {
		this._currentUser.next(receivedData)
		localStorage.setItem('currentUserKNB', JSON.stringify(receivedData))
	}

	clearCurrentUser = (): void => {
		this._currentUser.next({ authorization: '', user: new User('') })
		localStorage.removeItem('currentUserKNB')
	}
}
