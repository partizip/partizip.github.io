const words = [
    {pl: "piec", de: "backen", particip: "gebacken"},
    {pl: "rozkazywać", de: "befehlen", particip: "befohlen"},
    {pl: "zaczynać", de: "beginnen", particip: "begonnen"},
    {pl: "gryźć", de: "beißen", particip: "gebissen"},
    {pl: "oferować", de: "bieten", particip: "geboten"},
    {pl: "wiązać", de: "binden", particip: "gebunden"},
    {pl: "skręcać", de: "biegen", particip: "gebogen"},
    {pl: "prosić", de: "bitten", particip: "gebeten"},
    {pl: "pozostawać", de: "bleiben", particip: "geblieben"},
    {pl: "łamać", de: "brechen", particip: "gebrochen"},
    {pl: "palić", de: "brennen", particip: "gebrannt"},
    {pl: "przynosić", de: "bringen", particip: "gebracht"},
    {pl: "myśleć", de: "denken", particip: "gedacht"},
    {pl: "mieć pozwolenie", de: "dürfen", particip: "gedurft"},
    {pl: "przyjmować", de: "empfangen", particip: "empfangen"},
    {pl: "polecać", de: "empfehlen", particip: "empfohlen"},
    {pl: "decydować", de: "entscheiden", particip: "entschieden"},
    {pl: "jeść", de: "essen", particip: "gegessen"},
    {pl: "jechać", de: "fahren", particip: "gefahren"},
    {pl: "upaść", de: "fallen", particip: "gefallen"},
    {pl: "łapać", de: "fangen", particip: "gefangen"},
    {pl: "znajdować", de: "finden", particip: "gefunden"},
    {pl: "latać", de: "fliegen", particip: "geflogen"},
    {pl: "uciekać", de: "fliehen", particip: "geflohen"},
    {pl: "płynąć", de: "fließen", particip: "geflossen"},
    {pl: "marznąć", de: "frieren", particip: "gefroren"},
    {pl: "dawać", de: "geben", particip: "gegeben"},
    {pl: "iść", de: "gehen", particip: "gegangen"},
    {pl: "udać się", de: "gelingen", particip: "gelungen"},
    {pl: "obowiązywać", de: "gelten", particip: "gegolten"},
    {pl: "cieszyć się", de: "genießen", particip: "genossen"},
    {pl: "zdarzyć się", de: "geschehen", particip: "geschehen"},
    {pl: "wygrać", de: "gewinnen", particip: "gewonnen"},
    {pl: "lać", de: "gießen", particip: "gegossen"},
    {pl: "sięgać", de: "greifen", particip: "gegriffen"},
    {pl: "mieć", de: "haben", particip: "gehabt"},
    {pl: "trzymać", de: "halten", particip: "gehalten"},
    {pl: "wisieć", de: "hängen", particip: "gehangen"},
    {pl: "podnosić", de: "heben", particip: "gehoben"},
    {pl: "nazywać się", de: "heißen", particip: "geheißen"},
    {pl: "pomagać", de: "helfen", particip: "geholfen"},
    {pl: "znać", de: "kennen", particip: "gekannt"},
    {pl: "brzmieć", de: "klingen", particip: "geklungen"},
    {pl: "przychodzić", de: "kommen", particip: "gekommen"},
    {pl: "móc", de: "können", particip: "gekonnt"},
    {pl: "ładować", de: "laden", particip: "geladen"},
    {pl: "pozwalać", de: "lassen", particip: "gelassen"},
    {pl: "biec", de: "laufen", particip: "gelaufen"},
    {pl: "pożyczać", de: "leihen", particip: "geliehen"},
    {pl: "czytać", de: "lesen", particip: "gelesen"},
    {pl: "leżeć", de: "liegen", particip: "gelegen"},
    {pl: "kłamać", de: "lügen", particip: "gelogen"},
    {pl: "mierzyć", de: "messen", particip: "gemessen"},
    {pl: "lubić", de: "mögen", particip: "gemocht"},
    {pl: "musieć", de: "müssen", particip: "gemusst"},
    {pl: "brać", de: "nehmen", particip: "genommen"},
    {pl: "radzić", de: "raten", particip: "geraten"},
    {pl: "trzeć", de: "reiben", particip: "gerieben"},
    {pl: "wąchać", de: "riechen", particip: "gerochen"},
    {pl: "wołać", de: "rufen", particip: "gerufen"},
    {pl: "świecić", de: "scheinen", particip: "geschienen"},
    {pl: "pchać", de: "schieben", particip: "geschoben"},
    {pl: "strzelać", de: "schießen", particip: "geschossen"},
    {pl: "spać", de: "schlafen", particip: "geschlafen"},
    {pl: "bić", de: "schlagen", particip: "geschlagen"},
    {pl: "zamykać", de: "schließen", particip: "geschlossen"},
    {pl: "kroić", de: "schneiden", particip: "geschnitten"},
    {pl: "pisać", de: "schreiben", particip: "geschrieben"},
    {pl: "krzyczeć", de: "schreien", particip: "geschrien"},
    {pl: "milczeć", de: "schweigen", particip: "geschwiegen"},
    {pl: "pływać", de: "schwimmen", particip: "geschwommen"},
    {pl: "przysięgać", de: "schwören", particip: "geschworen"},
    {pl: "widzieć", de: "sehen", particip: "gesehen"},
    {pl: "być", de: "sein", particip: "gewesen"},
    {pl: "śpiewać", de: "singen", particip: "gesungen"},
    {pl: "tonąć", de: "sinken", particip: "gesunken"},
    {pl: "siedzieć", de: "sitzen", particip: "gesessen"},
    {pl: "mówić", de: "sprechen", particip: "gesprochen"},
    {pl: "skakać", de: "springen", particip: "gesprungen"},
    {pl: "stać", de: "stehen", particip: "gestanden"},
    {pl: "kraść", de: "stehlen", particip: "gestohlen"},
    {pl: "wspinać się", de: "steigen", particip: "gestiegen"},
    {pl: "umrzeć", de: "sterben", particip: "gestorben"},
    {pl: "pchać", de: "stoßen", particip: "gestoßen"},
    {pl: "malować", de: "streichen", particip: "gestrichen"},
    {pl: "kłócić się", de: "streiten", particip: "gestritten"},
    {pl: "nosić", de: "tragen", particip: "getragen"},
    {pl: "spotykać", de: "treffen", particip: "getroffen"},
    {pl: "napędzać", de: "treiben", particip: "getrieben"},
    {pl: "kopać", de: "treten", particip: "getreten"},
    {pl: "pić", de: "trinken", particip: "getrunken"},
    {pl: "robić", de: "tun", particip: "getan"},
    {pl: "zgubić", de: "verlieren", particip: "verloren"},
    {pl: "uniknąć", de: "vermeiden", particip: "vermieden"},
    {pl: "zniknąć", de: "verschwinden", particip: "verschwunden"},
    {pl: "wybaczyć", de: "verzeihen", particip: "verziehen"},
    {pl: "rosnąć", de: "wachsen", particip: "gewachsen"},
    {pl: "myć", de: "waschen", particip: "gewaschen"},
    {pl: "reklamować", de: "werben", particip: "geworben"},
    {pl: "stać się", de: "werden", particip: "geworden"},
    {pl: "rzucać", de: "werfen", particip: "geworfen"},
    {pl: "ważyć", de: "wiegen", particip: "gewogen"},
    {pl: "wiedzieć", de: "wissen", particip: "gewusst"},
    {pl: "chcieć", de: "wollen", particip: "gewollt"},
    {pl: "ciągnąć", de: "ziehen", particip: "gezogen"},
    {pl: "zmuszać", de: "zwingen", particip: "gezwungen"}
];

let currentWord = null;
let correctCount = {};

function nextWord() {

    if (words.length === 0) {
        document.getElementById("word").textContent = "Gratulacje! Wszystko zaliczone.";
        document.getElementById("wordsLeft").textContent = "";
        return;
    }
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = "Aktualne słowo: " + currentWord.pl;
    document.getElementById("answerDe").value = "";
    document.getElementById("answerPartizip").value = "";
    document.getElementById("wordsLeft").textContent = "Pozostało słówek: " + words.length;
    document.getElementById("answerDe").focus();

}

function checkAnswer() {
    const userInputDe = document.getElementById("answerDe").value.trim();
    const userInputPartizip = document.getElementById("answerPartizip").value.trim();
    let feedback = "";
    let feedbackClass = ""
    if (userInputDe.toLowerCase() === currentWord.de && userInputPartizip.toLowerCase() === currentWord.particip) {
        correctCount[currentWord.pl] = (correctCount[currentWord.pl] || 0) + 1;
        if (correctCount[currentWord.pl] >= 2) {
            words.splice(words.indexOf(currentWord), 1);
        }
        feedback = "Dobrze!!!";
        feedbackClass = "correct";
    } else {
        feedback = "Źle! Poprawne odpowiedzi: " + currentWord.de + ", " + currentWord.particip;
        feedbackClass = "notCorrect";
    }
    document.getElementById("feedback").textContent = feedback;
    document.getElementById("feedback").classList.remove("correct")
    document.getElementById("feedback").classList.remove("notCorrect")
    document.getElementById("feedback").classList.add(feedbackClass)
    nextWord();
}

let lastActiveInput = null;

document.getElementById('answerDe').addEventListener('focus', () => {
    lastActiveInput = document.getElementById('answerDe');
});

document.getElementById('answerPartizip').addEventListener('focus', () => {
    lastActiveInput = document.getElementById('answerPartizip');
});

function addChar(char, event) {
    event.preventDefault();
    if (lastActiveInput) {
        lastActiveInput.value += char;
        lastActiveInput.focus();
    }
}


document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        checkAnswer();
    }
})

nextWord();