# Film Collection

A single-page Angular application for browsing a film catalog. Built as part of the RS School Angular course.

## Features

- Browse a catalog of films with poster, title, year, genre, and rating
- Search films by title in real time
- Add films to favorites
- View full film details on a separate page
- Breadcrumb navigation
- 404 page for unknown routes

## Tech Stack

- Angular 21 (standalone components, signals)
- TypeScript (strict mode)
- CSS

## How to Run

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Build for production

```bash
npm run build
```

## Project Structure

```text
src/app/
├── components/        # Shared UI components (film-card, breadcrumb)
├── directives/        # Custom directives (autofocus)
├── mocks/             # Static mock data
├── models/            # TypeScript interfaces
├── pages/             # Route-level page components
├── pipes/             # Custom pipes (duration)
├── resolvers/         # Route resolvers
└── services/          # Application services (films)
```

## Author

ZedMalatesta
