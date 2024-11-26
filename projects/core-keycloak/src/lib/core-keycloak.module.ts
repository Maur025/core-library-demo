import { APP_INITIALIZER, NgModule } from '@angular/core'
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular'
import { initializer } from './initializer/keycloak-initializer'
import { KeycloakAuthService } from './services/keycloak-auth.service'
import { HandleKeycloakAuthGuard } from '../public-api'

@NgModule({
	declarations: [],
	imports: [KeycloakAngularModule],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: initializer,
			multi: true,
			deps: [KeycloakService],
		},
		KeycloakAuthService,
		HandleKeycloakAuthGuard,
	],
	exports: [],
})
export class CoreKeycloakModule {}
