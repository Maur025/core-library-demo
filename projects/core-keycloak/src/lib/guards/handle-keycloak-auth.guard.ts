import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router'
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular'
@Injectable()
export class HandleKeycloakAuthGuard extends KeycloakAuthGuard {
	constructor(
		protected override router: Router,
		protected override keycloakAngular: KeycloakService
	) {
		super(router, keycloakAngular)
	}

	override isAccessAllowed = async (
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean | UrlTree> => {
		if (!(await this.authVerify())) {
			return false
		}

		const roleResponse: boolean | null = this.rolesExistVerify(route)
		if (roleResponse != null) {
			return roleResponse
		}

		return true
	}

	private readonly authVerify = async (): Promise<boolean> => {
		if (!this.authenticated) {
			await this.keycloakAngular?.login()
			return false
		}

		return true
	}

	private readonly rolesExistVerify = (
		route: ActivatedRouteSnapshot
	): boolean | null => {
		const requiredRoles = route?.data['roles'] as string[]

		if (!requiredRoles || requiredRoles.length === 0) {
			return true
		}

		const hasRole = requiredRoles.some(role => this.roles?.includes(role))
		if (!hasRole) {
			this.router?.navigate(['/access-denied'])
			return false
		}

		return null
	}
}
