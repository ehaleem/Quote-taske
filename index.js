let x = document.getElementById("quote");
let y = document.getElementById("quotename");



let quote = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”"
];
let quotename = ["Oscar Wilde", "Frank Zappa", " Marilyn Monroe" ,"Albert Einstein","Bernard M. Baruch","William W. Purkey"];

let preNum ; 

function showQuotes() {
    let num;
    do {
        num = Math.floor(Math.random() * quote.length); 
    } while (num === preNum); 
    preNum = num; 

    console.log(num);
    x.innerHTML = quote[num];
    y.innerHTML = quotename[num];
}




