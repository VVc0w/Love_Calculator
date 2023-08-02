var firstName = prompt("Please enter first name");
var secondName = prompt("Please enter second name")
console.log(firstName);
console.log(secondName);
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore >= 0 && loveScore <= 20) {
    alert(`Your love calculator results state that ${firstName} & ${secondName} have a bad Love Score of ${loveScore}%! Wow, you're basically Johnny Depp and Amber Heard at this point. See you in court!`);
}

if (loveScore >= 21 && loveScore <= 40) {
    alert(`Your love calculator results state that ${firstName} & ${secondName} have poor Love Score of ${loveScore}%! I wouldn't recommend getting married anytime soon!`);
}

if (loveScore >= 41 && loveScore <= 60) {
    alert(`Your love calculator results state that ${firstName} & ${secondName} have an OK Love Score of ${loveScore}%! There's definitely a spark!`);
}

if (loveScore >= 61 && loveScore <= 80) {
    alert(`Your love calculator results state that ${firstName} & ${secondName} have a great Love Score of ${loveScore}%! Awwwwww, this totally works, will you save me some wedding cake?`);
}

if (loveScore >= 81 && loveScore <= 99) {
    alert(`Your love calculator results state that ${firstName} & ${secondName} have an amazing Love Score of ${loveScore}%! Congratulations, you love each other as much as the guy who coded this loves New York Cheesecake!!!`); 
}

if (loveScore === 100) {
    alert(`Your love calculator results state that ${firstName} & ${secondName} have a perfect Love Score of ${loveScore}%! Congratulations! You can't get any better than this!`);
}
   