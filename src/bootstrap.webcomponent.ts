import {AppWebComponentModule} from './app/AppWebComponent.module';
import {bootstrap} from '@angular-architects/module-federation-tools';

bootstrap(AppWebComponentModule, {
  production: true,
  appType: 'shell',
}).catch(err => console.error(err));

