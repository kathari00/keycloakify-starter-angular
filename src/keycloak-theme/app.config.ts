
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
  withPreloading
} from '@angular/router';

import { THEME_ROUTES } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [     
    importProvidersFrom(BrowserModule),
    
    provideRouter(
      THEME_ROUTES, 
      withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),
  ]
};