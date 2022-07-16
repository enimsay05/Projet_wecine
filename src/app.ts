import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { enableProdMode } from '@angular/core';
import { environment } from './environements/environment';
import {AppModule} from "./app/app.module";
import "./app/app.component.scss";

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
