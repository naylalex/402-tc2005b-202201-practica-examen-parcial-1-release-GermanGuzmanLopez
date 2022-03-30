import './styles.css';
import isPalindrome from './checker';

console.log("index.ts/start");

const inputText=<HTMLInputElement>document.getElementById('inputText');
let bPalindrome =null;
if(inputText){
    const bPalindrome = isPalindrome (inputText.value);
    console.log(bPalindrome);
}

const divResult=<HTMLDivElement>document.getElementById('divResult');
if (divResult) {
    if(bPalindrome){
        divResult.innerText='The word is palindrome!'
    } else {
        divResult.innerText='The word is not palindrome, ni pex'
    }
}