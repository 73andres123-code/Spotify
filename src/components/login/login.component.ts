import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule // Add MatIconModule here
  ],
  template: `
    <div class="flex items-center justify-center h-full p-4">
      <mat-card class="w-full max-w-sm bg-gray-800 text-gray-100 shadow-lg rounded-lg">
        <mat-card-header class="border-b border-gray-700 pb-4 mb-4">
          <mat-card-title class="text-2xl font-bold text-green-400">Login (Inactive)</mat-card-title>
        </mat-card-header>
        <mat-card-content class="text-gray-300">
          <p class="mb-4">This login component is currently inactive and serves as a placeholder.</p>
          <p>In a real application, you would connect to Spotify's API here for authentication.</p>
        </mat-card-content>
        <mat-card-actions class="flex justify-end pt-4 border-t border-gray-700 mt-4">
          <button mat-raised-button color="primary" class="bg-green-600 hover:bg-green-700 text-white">
            <mat-icon>spotify</mat-icon> Connect with Spotify
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
    /* Customize here: Component-specific styles if needed, but Tailwind is primary */
    .mat-mdc-card-header {
      padding: 16px;
    }
    .mat-mdc-card-content {
      padding: 0 16px;
    }
    .mat-mdc-card-actions {
      padding: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}