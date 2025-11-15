export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverArt: string; // URL to image
  playCount: number;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  popularity: number; // 0-100
  image: string; // URL to image
}

export interface AudioFeature {
  trackId: string;
  danceability: number; // 0-1
  energy: number; // 0-1
  valence: number; // 0-1 (musical positiveness)
  tempo: number; // BPM
}

export interface Summary {
  totalTracksListened: number;
  uniqueArtists: number;
  totalListeningHours: number;
}

export interface AllData {
  tracks: Track[];
  artists: Artist[];
  audioFeatures: AudioFeature[];
  summary: Summary;
}
