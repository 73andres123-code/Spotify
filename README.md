# My Spotify Wrap-Up Applet

This is an Angular application demonstrating a "Spotify Wrap-Up" experience using mock data. It showcases top tracks, top artists, and audio features in a clean, responsive UI built with Angular Material and Tailwind CSS.

## Features

*   **Dashboard**: A summary of your listening habits.
*   **Top Tracks**: List of your most played songs.
*   **Top Artists**: List of your favorite artists.
*   **Audio Features**: Insights into the average audio characteristics of your music.
*   **Responsive Design**: Adapts to different screen sizes.
*   **Mock Data**: All data is loaded from a local `sample-data.json` file.

## Project Structure

```
.
├── index.html
├── index.tsx
├── metadata.json
├── README.md
└── src/
    ├── app.component.css
    ├── app.component.html
    ├── app.component.ts
    ├── app.routes.ts
    ├── components/
    │   ├── audio-features/
    │   │   ├── audio-features.component.css
    │   │   ├── audio-features.component.html
    │   │   └── audio-features.component.ts
    │   ├── dashboard/
    │   │   ├── dashboard.component.css
    │   │   ├── dashboard.component.html
    │   │   └── dashboard.component.ts
    │   ├── login/
    │   │   ├── login.component.ts
    │   │   └── login.component.css (inline)
    │   ├── top-artists/
    │   │   ├── top-artists.component.css
    │   │   ├── top-artists.component.html
    │   │   └── top-artists.component.ts
    │   └── top-tracks/
    │       ├── top-tracks.component.css
    │       ├── top-tracks.component.html
    │       └── top-tracks.component.ts
    ├── data/
    │   ├── data.types.ts
    │   └── sample-data.json
    └── services/
        └── data.service.ts
```

## Technologies Used

*   **Angular**: v20+
*   **TypeScript**: For application logic.
*   **Tailwind CSS**: For utility-first styling and responsive design.
*   **Angular Material**: For UI components (toolbar, sidenav, cards, tables).
*   **Signals**: For state management.
*   **Zoneless Change Detection**: For enhanced performance.
*   **Hash Fragment Routing**: For navigation within the Applet environment.

## How to Run (Local Development - Standard Angular CLI setup)

Although this application is designed to run in a special "Applet" environment, you can typically run Angular applications locally using the Angular CLI.

1.  **Install Node.js and npm:** If you don't have them, download from [nodejs.org](https://nodejs.org/).
2.  **Install Angular CLI:**
    ```bash
    npm install -g @angular/cli
    ```
3.  **Create a new Angular project (if not already done):**
    ```bash
    ng new my-spotify-wrap-up --standalone --skip-install --style=none
    cd my-spotify-wrap-up
    ```
    *Note: The generated files assume a standalone project structure without a default style file.*
4.  **Copy Files:** Place all the generated files into the appropriate directories within your `my-spotify-wrap-up` project.
    *   `index.html` and `index.tsx` should go into the project root.
    *   `src/app.component.*`, `src/app.routes.ts` go into `src/`.
    *   `src/components/`, `src/services/`, `src/data/` directories should be created and files placed accordingly.
    *   `metadata.json` and `README.md` go into the project root.
5.  **Install dependencies:**
    ```bash
    npm install
    npm install @angular/material @angular/cdk @angular/router @angular/common @angular/core rxjs
    ```
6.  **Update `angular.json` (if using CLI):**
    *   Ensure the `index` and `main` paths are correct for the root `index.html` and `index.tsx`.
    *   For the Applet environment, an `angular.json` is **not** used, but for local CLI testing, you'd typically configure it. In this specific Applet context, assume `index.tsx` is the entry point compiled directly.
7.  **Serve the application:**
    ```bash
    ng serve
    ```
    Open your browser to `http://localhost:4200/#/dashboard` (note the hash for hash fragment routing).

## API Key (Not Applicable)

This application uses **mock data only** and does not interact with any external APIs (like Google GenAI or Spotify's actual API). Therefore, no API keys are required or handled within this codebase.

## Customization

*   **Mock Data**: Modify `src/data/sample-data.json` to change the displayed tracks, artists, and audio features.
*   **Styling**: Adjust Tailwind CSS classes directly in the HTML templates or `app.component.css` for Angular Material overrides.
*   **Components**: Extend existing components or add new ones to visualize other aspects of listening data.

```