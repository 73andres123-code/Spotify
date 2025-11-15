import { Injectable, signal } from '@angular/core';
import { Observable, of, tap, shareReplay } from 'rxjs';
// Add map operator import
import { map } from 'rxjs/operators';
import { AllData, Track, Artist, AudioFeature, Summary } from '../data/data.types';
import { SAMPLE_DATA } from '../data/sample-data'; // Directly import the TS data object

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allData = signal<AllData | null>(null);
  private dataLoad$: Observable<AllData>;

  constructor() {
    // Initialize dataLoad$ observable with the directly imported data
    this.dataLoad$ = of(SAMPLE_DATA).pipe(
      tap(data => this.allData.set(data)),
      shareReplay(1) // Cache the result and share with future subscribers
    );
  }

  // Private helper to get the loaded data observable
  private getLoadedData(): Observable<AllData> {
    return this.dataLoad$;
  }

  getTopTracks(): Observable<Track[]> {
    return this.getLoadedData().pipe(map(data => data.tracks));
  }

  getTopArtists(): Observable<Artist[]> {
    return this.getLoadedData().pipe(map(data => data.artists));
  }

  getAllAudioFeatures(): Observable<AudioFeature[]> {
    return this.getLoadedData().pipe(map(data => data.audioFeatures));
  }

  getSummary(): Observable<Summary> {
    return this.getLoadedData().pipe(map(data => data.summary));
  }
}
