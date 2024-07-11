# Sudoku Solver

This project is a simple sudoku solver that uses a REST API to generate Sudoku puzzles and serves them to a frontend.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the server: `node src/app.js`
4. Open the frontend in your browser

## Structure
The project is structured as follows:
- `src/app.js`: The main file that starts the server and handles the routes
- `src/sudoku.js`: The file that contains the logic used by the REST api to generate sudoku puzzles
- `src/script.js`: Contains backtracking algorithm used to solve the puzzles


## API Endpoints

- `GET /generate?difficulty=<level>`: Returns a Sudoku puzzle. Difficulty levels: `easy`, `medium`, `hard`.

## Frontend

Open `public/index.html` in your browser to interact with the Sudoku puzzles.

## License

MIT
