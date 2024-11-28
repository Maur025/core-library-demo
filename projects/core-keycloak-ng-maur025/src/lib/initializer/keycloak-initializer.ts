import { KeycloakOptions, KeycloakService } from 'keycloak-angular'
import { KeycloakConfig } from 'keycloak-js'

export const keycloakInitializer = (
	keycloakService: KeycloakService,
	config: KeycloakConfig
): (() => Promise<boolean>) => {
	const keycloakOptions: KeycloakOptions = {
		config: config,
		loadUserProfileAtStartUp: true,
		initOptions: { onLoad: 'check-sso', checkLoginIframe: false },
		bearerExcludedUrls: [],
	}

	return () => keycloakService.init(keycloakOptions)
}
