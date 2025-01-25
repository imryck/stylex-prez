import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import inject from '@stylexjs/dev-runtime';
import { isDevMode } from '@angular/core';


if (isDevMode()) {
  inject({
    classNamePrefix: 'x',
    dev: true,
    test: false,
    useRemForFontSize: true,
    styleResolution: 'application-order',
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
