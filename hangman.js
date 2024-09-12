import axios from "axios";
import * as store from "./store";

let guessedWord;

function getWord(){
try{
    let getWord = axios.get(`https://random-word-api.herokuapp.com/word?length=5`);
    store.Hangman.elementaryWords = getWord.data;
    } catch (error){
        console.log(error);
    }
    
}

guessedWord = getWord().toString();
console.log(guessedWord);


let guessedLetters = [];

let score = 20;

// let number = Math.floor(Math.random() * words.length)

let guessWord = guessedWord;

console.log(guessWord);

guessedWord = guessWord.toUpperCase();
// guessedWord = "apple".toUpperCase();

let displayWord = '_ '.repeat(guessedWord.length).trim();
console.log(displayWord);

function playGame(word){
    // input dashes
    document.querySelector("#wordDisplay").textContent = '_ '.repeat(guessedWord.length).trim();
    // starting params
    let incorrectGuess = 6;
    let guessCount = 0;
    let tries = 0;
    let correctLetters = 0;
    // submit button
    let submitButton = document.getElementById("guess");
    // user input values
    submitButton.addEventListener("click", event => {
        event.preventDefault();
        let userValue = document.getElementById("letterInput").value.toUpperCase();
        console.log(userValue);
        console.log(typeof userValue);

    // while the guess count is less than the number of incorrect guesses
        // get user input for the letter guessed
            // if the letter guessed is equal to a letter in the word, display the letter
            // else if the letter guessed does not equal the letter in the word, display a body part
    // if the guess count is equal to the incorrect guesses, the game is over and display the part for user initials
        if(word.includes(userValue)){
            let updatedWord = ""
            correctLetters++;
            document.getElementById("letterInput").value = ""
            for (let x = 0; x < word.length; x++){
                updatedWord += (word[x] === userValue) ? userValue : displayWord[x * 2];
                updatedWord += " "
                console.log(`updated word ${updatedWord}`);
            }
            displayWord  = updatedWord.trim();
            document.querySelector("#wordDisplay").textContent = displayWord;
            tries++;
            console.log("correct");
            console.log(tries);
            score = score + 3;
            console.log(score);
        } else {
            // make part of the body visible
            // let body = ["manHead", "manBody", "manLeftArm", "manRightArm", "manLeftLeg", "manRightLeg"] //Input all of the ids for the body
            // document.getElementById(`${body[guessCount]}`).style.opacity = "1";
            guessCount++;
            tries++;
            guessedLetters.push(`${userValue} `)
            document.getElementById("wrongGuesses").textContent = `${guessedLetters} `;
            document.getElementById("letterInput").value = ""
            console.log(`guess count ${guessCount}`);
            console.log(`incorrect path: tries ${tries}`);
            score = score - 1;
            console.log(score);
            }

            if (guessCount === incorrectGuess){
                document.getElementById("endGame").style.display = "block";
                document.getElementById("submitScore").addEventListener("click", event => {
                event.preventDefault();
                console.log("input clicked");
                let userInitials = document.getElementById("initialsInput").value;
                console.log(userInitials);
                let scoreData = score;
                console.log(scoreData);
                try {
                axios.post(`${api}/hangman`, {
                    userInitials: userInitials,
                    score: scoreData
                });
            } catch (error) {
                console.log(error);
            }
                document.getElementById("initialsInput").value = ""
                })
                alert(`You lose! Your score is ${score} with ${tries} tries and ${guessCount} wrong guesses. The correct word was ${word}`);
                // make user input for initials
                // score based off of how many tries it took
                console.log("Max attempts");
                
                }
            if(correctLetters === word.length){
                document.getElementById("endGame").style.display = "block";
                document.getElementById("submitScore").addEventListener("submit", event => {
                event.preventDefault();
                let userInitials = document.getElementById("initialsInput").value;
                console.log(userInitials);
                let scoreData = score;
                console.log(scoreData);
                axios.post(`${api}/hangman`, {
                    userInitials: userInitials,
                    score: scoreData
                });   
                })
                alert(`You win! Your score is ${score} with ${tries} tries and ${guessCount} wrong guesses.`);
            }
            });
            // return inputValue;
        
            // axios post to the database
        }
        
        playGame(guessedWord);