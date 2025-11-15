import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { AudioFeature, Track } from '../../data/data.types';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, combineLatest } from 'rxjs';

@Component({
  selector: 'app-audio-features',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './audio-features.component.html',
  styleUrl: './audio-features.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioFeaturesComponent implements OnInit {
  averageFeatures = signal<any | null>(null);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    combineLatest([
      this.dataService.getTopTracks(),
      this.dataService.getAllAudioFeatures()
    ]).pipe(
      map(([tracks, allFeatures]) => {
        if (!tracks.length || !allFeatures.length) {
          return null;
        }

        const topTrackIds = new Set(tracks.map(t => t.id));
        const relevantFeatures = allFeatures.filter(f => topTrackIds.has(f.trackId));

        if (!relevantFeatures.length) {
          return null;
        }

        const sumDanceability = relevantFeatures.reduce((acc, f) => acc + f.danceability, 0);
        const sumEnergy = relevantFeatures.reduce((acc, f) => acc + f.energy, 0);
        const sumValence = relevantFeatures.reduce((acc, f) => acc + f.valence, 0);
        const sumTempo = relevantFeatures.reduce((acc, f) => acc + f.tempo, 0);

        return {
          danceability: (sumDanceability / relevantFeatures.length),
          energy: (sumEnergy / relevantFeatures.length),
          valence: (sumValence / relevantFeatures.length),
          tempo: (sumTempo / relevantFeatures.length),
          count: relevantFeatures.length
        };
      })
    ).subscribe(avg => this.averageFeatures.set(avg));
  }
}
