import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { Summary } from '../../data/data.types';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  summary = signal<Summary | null>(null);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSummary().subscribe(summary => {
      this.summary.set(summary);
    });
  }
}
