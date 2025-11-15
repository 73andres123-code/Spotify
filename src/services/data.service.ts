import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Add map operator import for rxjs pipelines
import { Observable, of, tap, map } from 'rxjs';
import { AllData, Track, Artist, AudioFeature, Summary } from '../data/data.types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allData = signal<AllData | null>(null);

  constructor(private http: HttpClient) {
    this.loadData();
  }

  private loadData(): void {
    // In a real app, this would be an API call. For mock data, we load the JSON directly.
    this.http.get<AllData>('/sample-data.json').subscribe(
      data => {
        this.allData.set(data);
      },
      error => {
        console.error('Error loading sample data:', error);
        // Fallback or error handling
        this.allData.set({
          tracks: [],
          artists: [],
          audioFeatures: [],
          summary: {
            totalTracksListened: 0,
            uniqueArtists: 0,
            totalListeningHours: 0
          }
        });
      }
    );
  }

  getTopTracks(): Observable<Track[]> {
    return this.allData() ? of(this.allData()!.tracks) : this.getLoadedData().pipe(
      map(data => data.tracks)
    );
  }

  getTopArtists(): Observable<Artist[]> {
    return this.allData() ? of(this.allData()!.artists) : this.getLoadedData().pipe(
      map(data => data.artists)
    );
  }

  getAllAudioFeatures(): Observable<AudioFeature[]> {
    return this.allData() ? of(this.allData()!.audioFeatures) : this.getLoadedData().pipe(
      map(data => data.audioFeatures)
    );
  }

  getSummary(): Observable<Summary> {
    return this.allData() ? of(this.allData()!.summary) : this.getLoadedData().pipe(
      map(data => data.summary)
    );
  }

  private getLoadedData(): Observable<AllData> {
    if (this.allData()) {
      return of(this.allData()!);
    }
    // If data isn't loaded yet (e.g., first call before HTTP completes),
    // re-request it or return an empty observable that will be populated later.
    // For this simple example, we assume loadData() will complete quickly.
    // A more robust solution might use a BehaviorSubject or a promise.
    return this.http.get<AllData>('/sample-data.json').pipe(
      tap(data => this.allData.set(data))
    );
  }
}