import { inject, Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class KeycloakAuthService {
	private readonly keycloakService = inject(KeycloakAuthService)
}
