import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {RouterOutlet} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  exports: [
    AppComponent,
  ],
})
export class AppSharedModule {
}
