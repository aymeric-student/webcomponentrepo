import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {AppWebComponentRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AppSharedModule} from './AppSharedModule.module';
import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';

const WEB_COMPONENT = 'app-web-component';

@NgModule({
  imports: [
    BrowserModule,
    AppWebComponentRoutingModule,
    AppSharedModule,
  ],
  bootstrap: [],
})
export class AppWebComponentModule implements DoBootstrap {
  constructor(private injector: Injector) {
    // window.addEventListener('reloadShadow', () => {
    //   let listShadowElement = document.querySelectorAll('.qtx-shadow-dom');
    //   let isShadowDom: boolean = false;
    //   listShadowElement.forEach(elem => {
    //     if (elem.shadowRoot) {
    //       isShadowDom = true;
    //       this.injector.get(ɵSharedStylesHost).addHost(elem.shadowRoot);
    //     }
    //   });
    //   if (isShadowDom) {
    //     this.injector.get(ɵSharedStylesHost).removeHost(document.head);
    //   }
    // });
    //
    // window.dispatchEvent(new Event('reloadShadow'));
  }


  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define(WEB_COMPONENT, ce);
  }
}


