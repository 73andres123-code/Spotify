import { Component, signal, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'My Spotify Wrap-Up';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isHandset = signal(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset || Breakpoints.Tablet)
      .subscribe(result => {
        this.isHandset.set(result.matches);
      });
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
