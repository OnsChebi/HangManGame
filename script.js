const keyboard=document.querySelector(".keyboard");
const wordDisplay=document.querySelector(".word-display")
const guessesText=document.querySelector(".guesses-text b");
const image=document.querySelector(".hangman-box img");
const resultat=document.querySelector(".game-result");
const playAgainBtn = resultat.querySelector("button");

let currentWord,correctLetters=[],tentatives=0;
const max=10;
//buttons creation 
//where i = code ascii (a)
for(let i=97;i<= 122;i++) // console.log(String.fromCharCode(i));//pour tester l'apparence des lettres
{
    const button = document.createElement("button");//ça remplace la partie commentée en html(creation du clavier)
    button.innerText=String.fromCharCode(i);//i represente les lettres de a jusqu'à z
    keyboard.appendChild(button);//l'ajout des button dans la div "keybord"
    button.addEventListener("click",(e)=>initGame(e.target,String.fromCharCode(i)));//event listener to get alphabets(e.target refer to the button)
     
} 

const randomWord = () => {
    const { word, hint } = words[Math.floor(Math.random() * words.length)];//pour generer random numbre pour l'indice words[random number]  words c'est la liste des mots dans le fichier words.js
    currentWord=word;
    //console.log(`Word: ${word}`);
    document.querySelector('.hint-text b').innerHTML=hint;//pour changer le contenu du hint en html
    //console.log(word.split("").map(letter => `<li class="letter">${letter}</li>`).join(""));
    wordDisplay.innerHTML=word.split("").map(() => `<li class="letter"></li>`).join("");//to split the word into caracteres /map() creates an array of <li> strings and.join("") combines these strings ==>pour ajouter le nombre des lettres selon notre mots
   // resetGame();
}
randomWord();

const initGame=(button,clickedLetter)=>{ //on ajoute un listener sur chaque boutons de la clavier
    //console.log(button,clickedLetter);
    if(currentWord.includes(clickedLetter)){// to check if the alphabet exist in the word or not
        //console.log(clickedLetter,"exist");
        [...currentWord].forEach((letter,index)=>{
            //the spread operator [...currentWord], nous permet d'étaler tous les caractères de currentWord dans un tableau. Chaque caractère de la chaîne devient un élément de ce nouveau tableau.
            if(letter === clickedLetter){
                correctLetters.push(clickedLetter);//on ajoute les lettres correctes dans "correctLetters[]" pour garder 
                wordDisplay.querySelectorAll("li")[index].innerText=letter;//afficher la lettre correctement devinée
            }
        });
    }else{
       // console.log(clickedLetter,"does not exist");
        tentatives++;//nombre de faute

        image.src=`images/hangman-${tentatives}.PNG`//changer l'image selon le nombre des fautes
    }
    guessesText.innerHTML=`${tentatives}/${max}`;//if the clicked alphabet doesn't exist in the word the score and the image will be changed
    button.disabled=true;//afin que l'utilisateur tape chaque lettre une seul fois 
    
   if(tentatives===max)return gameOver(false);//in case the player lose
  if(correctLetters.length === currentWord.length) return gameOver(true);//in case the player win
}




const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';//changer le text dans "box" selon le resultat(wining or losing)
    resultat.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;//pour affiche un gif indiquant le resultat 
    resultat.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';//un autre message -->fin de jeu
    resultat.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;//pour afficher le mot au hasard(random word)
    resultat.classList.add("appear");//class to show the box which have the result
}
//initialisation de jeu(de tous les parametre et les image ainsi que le score)
const resetGame = () => {
    correctLetters = [];
    tentatives= 0;
    image.src = "images/hangman-0.PNG";
    randomWord();//to generate a new word
    guessesText.innerText = `${tentatives} / ${max}`;//initialisation du scire
    keyboard.querySelectorAll("button").forEach(btn => btn.disabled = false);//pour les bouton du clavier qui ont été bloqué
    resultat.classList.remove("appear");// to hide the box(resultat)
}
playAgainBtn.addEventListener("click", resetGame);//appel du fonction game Over en cliquant sur le bouton play again afin de chaque jeu

