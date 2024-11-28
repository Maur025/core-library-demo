import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core'
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular'
import { keycloakInitializer } from './initializer/keycloak-initializer'
import { KeycloakAuthService } from './services/keycloak-auth.service'
import { HandleKeycloakAuthGuard } from '../public-api'
import { KeycloakConfig } from 'keycloak-js'

@NgModule({
	declarations: [],
	imports: [KeycloakAngularModule],
	providers: [],
	exports: [],
})
export class CoreKeycloakModule {
	static readonly forRoot = (config: {
		keycloakConfig: KeycloakConfig
	}): ModuleWithProviders<CoreKeycloakModule> => {
		return {
			ngModule: CoreKeycloakModule,
			providers: [
				{
					provide: APP_INITIALIZER,
					useFactory: (keycloakService: KeycloakService) =>
						keycloakInitializer(keycloakService, config?.keycloakConfig),
					deps: [KeycloakService],
					multi: true,
				},
				KeycloakAuthService,
				HandleKeycloakAuthGuard,
			],
		}
	}
}
