/*
Aufgabe: <03 Memory Settings>
Name: <Joscha Reuther>
Datum: <18.04.2022>
Quellen: https://developer.mozilla.org/de/docs/Web/API/FormData/get
*/
var Memory;
(function (Memory) {
    let startTimeStamp;
    let firstCard;
    let locked = false;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //console.log("Load");
        document.querySelector("#startbutton").addEventListener("click", createDeck);
    }
    function createDeck() {
        console.log("Start");
        let playingAreaDiv = document.querySelector("div#playingArea");
        playingAreaDiv.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData.entries()) {
            console.log(entry);
        }
        let pairCount = parseInt(formData.get("pairCount").toString());
        let cardSize = formData.get("cardSize") + "px";
        let color = formData.get("color").toString();
        let backgroundcolor = formData.get("backgroundcolor").toString();
        let fontcolor = formData.get("fontcolor").toString();
        let fonttype = formData.get("fonttype").toString();
        console.log(pairCount);
        console.log(cardSize);
        console.log(color);
        console.log(backgroundcolor);
        console.log(fontcolor);
        console.log(fonttype);
        playingAreaDiv.style.backgroundColor = backgroundcolor;
        let deck = [];
        for (let k = 0; k < pairCount; k++) {
            deck.push(k);
            deck.push(k);
        }
        deck = shuffle(deck);
        for (let i = 0; i < deck.length; i++) {
            createCard(deck[i], cardSize, color, fontcolor);
        }
        startTimeStamp = new Date();
        let formDiv = document.querySelector("#form");
        formDiv.classList.add("hidden");
        playingAreaDiv.classList.remove("hidden");
    }
    function createCard(_value, cardSize, color, fontcolor, fonttype) {
        let cardDiv = document.createElement("div");
        let playingAreaDiv = document.querySelector("#playingArea");
        playingAreaDiv.appendChild(cardDiv);
        cardDiv.classList.add("card");
        cardDiv.style.backgroundColor = color;
        cardDiv.style.height = cardSize;
        cardDiv.style.width = cardSize;
        cardDiv.addEventListener("click", flipCard);
        let cardValueSpan = document.createElement("span");
        cardDiv.appendChild(cardValueSpan);
        cardValueSpan.innerHTML = _value.toString();
        cardValueSpan.classList.add("hidden");
        cardValueSpan.style.color = fontcolor;
        cardValueSpan.style.fontFamily = fonttype;
    }
    function flipCard(_event) {
        if (locked == true) {
            return;
        }
        else {
            let clickedCard = _event.target;
            if (clickedCard == firstCard) {
                return;
            }
            else {
                let clickedCardSpan = clickedCard.querySelector("span");
                clickedCardSpan.classList.remove("hidden");
                if (firstCard == undefined) {
                    firstCard = clickedCard;
                    return;
                }
                else {
                    let firstclickedCardSpan = firstCard.querySelector("span");
                    let firstCardValue = firstclickedCardSpan.innerHTML;
                    let secondCardValue = clickedCardSpan.innerHTML;
                    locked = true;
                    setTimeout(function () {
                        locked = false;
                        if (firstCardValue == secondCardValue) {
                            clickedCard.classList.add("invisible");
                            firstCard.classList.add("invisible");
                            let visibleCard = document.querySelector(".card:not(.invisible)");
                            if (visibleCard == null) {
                                let endTimeStamp = new Date();
                                let duration = endTimeStamp.getTime() - startTimeStamp.getTime();
                                let minutes = Math.floor(duration / 60000);
                                let secounds = Math.floor((duration % 60000) / 1000);
                                alert("Du hast ein Paar gefunden! Dauer: " + minutes + "min " + secounds + "s");
                            }
                        }
                        else {
                            clickedCardSpan.classList.add("hidden");
                            firstclickedCardSpan.classList.add("hidden");
                        }
                        firstCard = undefined;
                    }, 2000);
                }
            }
        }
    }
    function shuffle(decknum) {
        for (let i = decknum.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [decknum[i], decknum[j]] = [decknum[j], decknum[i]];
        }
        return decknum;
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=MemoryScript.js.map