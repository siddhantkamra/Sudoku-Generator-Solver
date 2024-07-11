const express = require('express');
const Sudoku = require('./sudoku');
const cors = require('cors'); // Import cors package
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(cors()); // Enable CORS for all routes

app.get('/generate', (req, res) => {
    const difficulty = req.query.difficulty || 'easy';
    const difficultyLevels = { easy: 20, medium: 40, hard: 60 };
    const K = difficultyLevels[difficulty] || 20;
    const sudoku = new Sudoku(9, K);
    sudoku.fillValues();
    res.json({ board: sudoku.getBoard() });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
