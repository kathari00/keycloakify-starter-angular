
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading
} from '@angular/router';

import { THEME_ROUTES } from './app.routes';
import { kcContextMockProvider } from './kcContextMock.provider';
import { SharedService } from './login/service/shared.service';
export const appConfig: ApplicationConfig = {
  providers: [     
    kcContextMockProvider,
    importProvidersFrom(BrowserModule),
    SharedService,
    provideRouter(
      THEME_ROUTES, 
      withPreloading(PreloadAllModules)
    ),
    
  ]
};