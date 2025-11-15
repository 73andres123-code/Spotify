import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data.service';
import { Artist } from '../../data/data.types';

@Component({
  selector: 'app-top-artists',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  templateUrl: './top-artists.component.html',
  styleUrl: './top-artists.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopArtistsComponent implements OnInit {
  topArtists = signal<Artist[]>([]);
  displayedColumns: string[] = ['position', 'image', 'name', 'genre', 'popularity'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTopArtists().subscribe(artists => {
      this.topArtists.set(artists);
    });
  }
}
