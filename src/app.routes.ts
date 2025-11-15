import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { AudioFeaturesComponent } from './components/audio-features/audio-features.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'top-artists', component: TopArtistsComponent },
  { path: 'audio-features', component: AudioFeaturesComponent },
  { path: '**', redirectTo: 'dashboard' } // Wildcard route for any unknown path
];
