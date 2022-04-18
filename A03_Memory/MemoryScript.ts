/*
Aufgabe: <03 Memory Settings>
Name: <Joscha Reuther>
Datum: <18.04.2022>
Quellen: https://developer.mozilla.org/de/docs/Web/API/FormData/get
*/

namespace Memory {
    let startTimeStamp: Date;
    let firstCard: HTMLDivElement;
    let locked: boolean = false;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        //console.log("Load");
        document.querySelector("#startbutton").addEventListener("click", createDeck);
    }
    function createDeck(): void {
        console.log("Start");
        let playingAreaDiv: HTMLDivElement = document.querySelector("div#playingArea");
        playingAreaDiv.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData.entries()) {
            console.log(entry);
        }
        let pairCount: number = parseInt(formData.get("pairCount").toString());
        let cardSize: number = formData.get("cardSize") + "px";
        let color: string = formData.get("color").toString();
        let backgroundcolor: string = formData.get("backgroundcolor").toString();
        let fontcolor: string = formData.get("fontcolor").toString();
        let fonttype: string = formData.get("fonttype").toString();

        console.log(pairCount);
        console.log(cardSize);
        console.log(color);
        console.log(backgroundcolor);
        console.log(fontcolor);
        console.log(fonttype);

        playingAreaDiv.style.backgroundColor = backgroundcolor;

        let deck: number[] = [];

        for (let k: number = 0; k < pairCount; k++) {
            deck.push(k);
            deck.push(k);
        }

        deck = shuffle(deck);
        for (let i: number = 0; i < deck.length; i++) {
            createCard(deck[i], cardSize, color, fontcolor);
        }
        startTimeStamp = new Date();

        let formDiv: HTMLDivElement = document.querySelector("#form");
        formDiv.classList.add("hidden");
        playingAreaDiv.classList.remove("hidden");
    }
    function createCard(_value: number, cardSize: string, color: string, fontcolor: string, fonttype: string): void {
        let cardDiv: HTMLDivElement = document.createElement("div");
        let playingAreaDiv: HTMLDivElement = document.querySelector("#playingArea");
        playingAreaDiv.appendChild(cardDiv);
        cardDiv.classList.add("card");
        cardDiv.style.backgroundColor = color;
        cardDiv.style.height = cardSize;
        cardDiv.style.width = cardSize;
        cardDiv.addEventListener("click", flipCard);

        let cardValueSpan: HTMLSpanElement = document.createElement("span");
        cardDiv.appendChild(cardValueSpan);
        cardValueSpan.innerHTML = _value.toString();
        cardValueSpan.classList.add("hidden");
        cardValueSpan.style.color = fontcolor;
        cardValueSpan.style.fontFamily = fonttype;
    }

    function flipCard(_event: Event): void {
        if (locked == true) {
            return;
        } else {
            let clickedCard: HTMLDivElement = <HTMLDivElement>_event.target;
            if (clickedCard == firstCard) {
                return;
            } else {
                let clickedCardSpan: HTMLSpanElement = clickedCard.querySelector("span");
                clickedCardSpan.classList.remove("hidden");
                if (firstCard == undefined) {
                    firstCard = clickedCard;
                    return;
                } else {
                    let firstclickedCardSpan: HTMLSpanElement = firstCard.querySelector("span");
                    let firstCardValue: string = firstclickedCardSpan.innerHTML;
                    let secondCardValue: string = clickedCardSpan.innerHTML;
                    locked = true;

                    setTimeout(function (): void {
                        locked = false;
                        if (firstCardValue == secondCardValue) {
                            clickedCard.classList.add("invisible");
                            firstCard.classList.add("invisible");

                            let visibleCard: HTMLDivElement = document.querySelector(".card:not(.invisible)");
                            if (visibleCard == null) {
                                let endTimeStamp: Date = new Date();
                                let duration: number = endTimeStamp.getTime() - startTimeStamp.getTime();
                                let minutes: number = Math.floor(duration / 60000);
                                let secounds: number = Math.floor((duration % 60000) / 1000);
                                alert("Glückwunsch, du hast das Memory gelöst! Dauer: " + minutes + "min " + secounds + "s");
                            }
                        } else {
                            clickedCardSpan.classList.add("hidden");
                            firstclickedCardSpan.classList.add("hidden");
                        }
                        firstCard = undefined;
                    }, 2000);
                }
            }
        }
    }

    function shuffle(decknum: number[]): number[] {
        for (let i: number = decknum.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [decknum[i], decknum[j]] = [decknum[j], decknum[i]];
        }
        return decknum;
    }
}

