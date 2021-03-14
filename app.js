var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function build() {
    var deck = [];
    for(i = 0; i < suits.length; i++) {
        for(j = 0; j < values.length; j++) {
            var card = {value: values[j], suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}

function shuffle() {
    var newDeck = build();
    var rand = [];
    for(var i = newDeck.length - 1; i > 0; i--) {
        rand = Math.floor(Math.random() * i);
        temp = newDeck[i];
        newDeck[i] = newDeck[rand];
        newDeck[rand] = temp;
    }
    return newDeck
}

function deal() {
    var arr = shuffle();
    var rands = [];
    var output = [];
    for(var i = 0; i < 2; i++) {
        rand = Math.floor(Math.random() * arr.length);
        rands.push(rand);
        output.push(arr[rands[i]]);
    }
    var myString = JSON.stringify(output);
    document.getElementById("output").innerHTML = myString;
}



