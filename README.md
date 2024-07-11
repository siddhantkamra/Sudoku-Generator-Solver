# Sudoku Solver

This project is a simple sudoku solver that uses a REST API t0 generate Sudoku puzzles and serves them to a frontend.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the server: `node src/app.js`

## API Endpoints

- `GET /generate?difficulty=<level>`: Returns a Sudoku puzzle. Difficulty levels: `easy`, `medium`, `hard`.

## Frontend

Open `public/index.html` in your browser to interact with the Sudoku puzzles.

## License

MIT
