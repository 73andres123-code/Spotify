import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data.service';
import { Track } from '../../data/data.types';

@Component({
  selector: 'app-top-tracks',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  templateUrl: './top-tracks.component.html',
  styleUrl: './top-tracks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopTracksComponent implements OnInit {
  topTracks = signal<Track[]>([]);
  displayedColumns: string[] = ['position', 'coverArt', 'title', 'artist', 'album', 'playCount'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTopTracks().subscribe(tracks => {
      this.topTracks.set(tracks);
    });
  }
}
