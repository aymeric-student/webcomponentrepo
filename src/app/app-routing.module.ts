import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

const routesWebComponent: Routes = [{
  path: '',
  component: AppComponent,
},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routesWebComponent)],
  exports: [RouterModule],
})
export class AppWebComponentRoutingModule {
}
