import '@angular/compiler';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './src/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
