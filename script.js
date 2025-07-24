
let questions = [ // json 
    {
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gage",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt; ?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Webseite in eine Webseite ein ?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2
    },
    {
        "question": "Wie stellt man einen Text am BESTEN fett dar ?",
        "answer_1": "&lt,strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut kann man NICHT für Testarea verwenden ?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut tittle aus ?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in Javascript eine Variable ?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4
    }
];

let currentQuestion = 0; // Variable für Startfrage(Index)

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // todo
    } else {
    let question = questions[currentQuestion]; // Variable für die erste Frage(Index 0) zwischen zu speichern
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1; // für die Anzeige der Frage von (+1 da erste Frage 0 ist(Index) )
    }
}

function answer(selection) {
    let question = questions[currentQuestion]; // Variable für angeklickte Antwort
            console.log('Selected answer ist ', selection); // Ausloggen der angeklickten Antwort

    let selectedQuestionNumber = selection.slice(-1); // Variable für den letzten Wert(hier Zahl) von der angeklickte Antwort 
            console.log('selectedQuestionNumber', selectedQuestionNumber); // Ausloggen von dem letzten Wert(Zahl) von der angeklickte Antwort 
            console.log('Current question ist ', question['right_answer']); // Ausloggen von de "right_answer" (ebenfalls Zahl)

    let idOfRightAnswer = `answer_${question['right_answer']}`; // für richtige Antwort bei falscher Antwort anzeigen


    // Abfrage, ob die letzte Zahl aus der angeklickten Anwort = der Zahl von "right_answer" ist
    if (selectedQuestionNumber == question['right_answer']) {
                console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success'); // class wird dem übergeordneten div (Element) hinzugefügt
        // document.getElementById(selection).classList.add('bg-success'); // class aus bootstrap wird dem div mit der ID hinzugefügt
        } else {
                console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // class wird dem übergeordneten div (Element) hinzugefügt
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // dadurch wird die richtige Antwort grün angezeigt
    }
    document.getElementById('next-button').disabled = false; // macht den button anklickbar nachdem eine Antwort angeklickt wurde
}

function nextQuestion() {
    currentQuestion++; // erhöht den Wert der Variable "currentQuestion" um 1    
    document.getElementById('next-button').disabled = true; // macht den button wieder nicht anklickbar
    resetAnswerButtons();
    showQuestion(); 
}

function resetAnswerButtons() { // entfernt die Farben in den Antwordbuttons
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

