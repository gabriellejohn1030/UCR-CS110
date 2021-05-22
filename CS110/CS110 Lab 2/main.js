var options = [];
var X_Score = 0;
var O_Score = 0;
var X_Won = 0;
var O_Won = 0;
var curr_Turn = 0;
var tries = 0;
var ai = 0;

function play(x) {
    if (ai == 0) {
        if (options[x] == 'X' || options[x] == "O") {
            return;
        }
        if(curr_Turn == 1) {
            document.getElementById('display').innerHTML = "X";
            options[x] = 'O';
            curr_Turn -= 1;
            document.getElementById(x).innerHTML = "O";
            tries++;
        }
        else if(curr_Turn == 0) {
            document.getElementById('display').innerHTML = "O";
            options[x] = 'X';
            curr_Turn += 1;
            document.getElementById(x).innerHTML = "X";
            tries++;
        }
    
        //Horizontals
        if( (options[1] == 'X' && options[2] == 'X' && options[3] == 'X') || (options[4] == 'X' && options[5] == 'X' && options[6] == 'X') || (options[7] == 'X' && options[8] == 'X' && options[9] == 'X') ) {
            X_Won++;
        }
        if( (options[1] == 'O' && options[2] == 'O' && options[3] == 'O') || (options[4] == 'O' && options[5] == 'O' && options[6] == 'O') || (options[7] == 'O' && options[8] == 'O' && options[9] == 'O') ) {
            O_Won++;
        }
    
        //Verticals
        if( (options[1] == 'X' && options[4] == 'X' && options[7] == 'X') || (options[2] == 'X' && options[5] == 'X' && options[8] == 'X') || (options[3] == 'X' && options[6] == 'X' && options[9] == 'X') ) {
            X_Won++;
        }
        if( (options[1] == 'O' && options[4] == 'O' && options[7] == 'O') || (options[2] == 'O' && options[5] == 'O' && options[8] == 'O') || (options[3] == 'O' && options[6] == 'O' && options[9] == 'O') ) {
            O_Won++;
        }
    
        //Diagonals
        if( (options[1] == 'X' && options[5] == 'X' && options[9] == 'X') || (options[3] == 'X' && options[5] == 'X' && options[7] == 'X')) {
            X_Won++;
        }
        if( (options[1] == 'O' && options[5] == 'O' && options[9] == 'O') || (options[3] == 'O' && options[5] == 'O' && options[7] == 'O')) {
            O_Won++;
        }
         
        
        if(X_Won == 1) {
            alert("X won!");
            X_Score++;
            document.getElementById("score_X").innerHTML = X_Score;
            X_Won = 0;
            newGame();
        }
    
        if(O_Won == 1) {
            alert("O won!");
            O_Score++;
            document.getElementById("score_O").innerHTML = O_Score;
            O_Won = 0;
            newGame();
        }
    
        if (tries == 9) {
            alert('Its a tie!');
            document.getElementById('display').innerHTML = "X";
            newGame();
        }
        
    }
    else if (ai == 1) {
    
        document.getElementById('display').innerHTML = "O";
        options[x] = 'X';
        curr_Turn += 1;
        document.getElementById(x).innerHTML = "X";
        tries++;

        if (tries != 9) {
            document.getElementById('display').innerHTML = "X";
            x = Math.floor(Math.random() * 9 + 1);
            while(options[x] == 'X' || options[x] == 'O') {
                x = Math.floor(Math.random() * 9 + 1);
            }
            options[x] = 'O';
            curr_Turn -= 1;
            document.getElementById(x).innerHTML = "O";
            tries++;
        }
        
    
        //Horizontals
        if( (options[1] == 'X' && options[2] == 'X' && options[3] == 'X') || (options[4] == 'X' && options[5] == 'X' && options[6] == 'X') || (options[7] == 'X' && options[8] == 'X' && options[9] == 'X') ) {        
            X_Won++;
        }
        if( (options[1] == 'O' && options[2] == 'O' && options[3] == 'O') || (options[4] == 'O' && options[5] == 'O' && options[6] == 'O') || (options[7] == 'O' && options[8] == 'O' && options[9] == 'O') ) {
            O_Won++;
        }
    
        //Verticals
        if( (options[1] == 'X' && options[4] == 'X' && options[7] == 'X') || (options[2] == 'X' && options[5] == 'X' && options[8] == 'X') || (options[3] == 'X' && options[6] == 'X' && options[9] == 'X') ) {
            X_Won++;
        }
        if( (options[1] == 'O' && options[4] == 'O' && options[7] == 'O') || (options[2] == 'O' && options[5] == 'O' && options[8] == 'O') || (options[3] == 'O' && options[6] == 'O' && options[9] == 'O') ) {
            O_Won++;
        }
    
        //Diagonals
        if( (options[1] == 'X' && options[5] == 'X' && options[9] == 'X') || (options[3] == 'X' && options[5] == 'X' && options[7] == 'X')) {
            X_Won++;
        }
        if( (options[1] == 'O' && options[5] == 'O' && options[9] == 'O') || (options[3] == 'O' && options[5] == 'O' && options[7] == 'O')) {
            O_Won++;
        }
         
        
        if(X_Won == 1) {
            alert("X won!");
            X_Score++;
            document.getElementById("score_X").innerHTML = X_Score;
            X_Won = 0;
            newGame();
        }
    
        if(O_Won == 1) {
            alert("X won!");
            O_Score++;
            document.getElementById("score_O").innerHTML = O_Score;
            O_Won = 0;
            newGame();
        }
    
        if (tries == 9) {
            alert('Its a tie!');
            document.getElementById('display').innerHTML = "X";
            newGame();
        }
    }
        
}

function play_ai() {
    newGame();
    ai = 1;

}

function newGame() {
    document.getElementById('1').innerHTML = "";
    document.getElementById('2').innerHTML = "";
    document.getElementById('3').innerHTML = "";
    document.getElementById('4').innerHTML = "";
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('7').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    document.getElementById('9').innerHTML = "";

    options = [];
    tries = 0;
    curr_Turn = 0;
}

function reset() {
    document.getElementById('1').innerHTML = "";
    document.getElementById('2').innerHTML = "";
    document.getElementById('3').innerHTML = "";
    document.getElementById('4').innerHTML = "";
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('7').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    document.getElementById('9').innerHTML = "";

    options = [];
    tries = 0;
    curr_Turn = 0;
    
    X_Score = 0;
    O_Score = 0;

    document.getElementById("score_X").innerHTML = X_Score;
    document.getElementById("score_O").innerHTML = O_Score;
}