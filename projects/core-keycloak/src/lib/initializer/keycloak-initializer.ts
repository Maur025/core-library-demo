import { KeycloakOptions, KeycloakService } from 'keycloak-angular'

export const initializer = (
	keycloakService: KeycloakService
): (() => Promise<boolean>) => {
	const keycloakOptions: KeycloakOptions = {
		config: {},
		loadUserProfileAtStartUp: true,
		initOptions: { onload: 'check-sso', checkLoginIframe: false },
		bearerExcludedUrls: [],
	}

	return () => keycloakService.init(keycloakOptions)
}
