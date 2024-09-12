import html from "html-literal";

export default () => html` <h1>Guessing Game</h1>
<div id="wordDisplay"></div>
<div id="wrongGuesses"></div>
<form id="guessForm">
    <input type="text" id="letterInput" maxlength="1" required>
    <input type="submit" value="Guess" id="guess">
</form>
<div id="endGame" style="display: none;">
    <input type="text" id="initialsInput" maxlength="3">
    <button id="submitScore">Submit Score</button>
</div>
<div id="scoreDisplay"></div>
`;