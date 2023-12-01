const prompt = require("prompt-sync")();

// Déclaration du tableau contenant les questions
const questions = ["Question 1 : Quel est le nom du plus grand animal terrestre ?",
    "Question 2 : Quel est le seul mamifère volant ?",
    "Question 3 : Quel est le nom du plus rapide des animaux terrestres ?",
    "Question 4 : Quel est le nom du plus venimeux des animaux marins ?",
    "Question 5 : Quel est le nom du plus intelligent des animaux non-humains ?"
]

// Déclaration des objets qui contiennent les réponses
let answerOne = {
    A: "Réponse A : L'éléphant d'Afrique",
    B: "Réponse B : Le rhinocéros blanc",
    C: "Réponse C : Le gorille des montagnes",
    D: "Réponse D : Le bison d'Amérique",
};
let answerTwo = {
    A: "Réponse A : Le colibri",
    B: "Réponse B : Le ptérodactyle",
    C: "Réponse C : La chauve-souris",
    D: "Réponse D : Le pingouin",
};
let answerThree = {
    A: "Réponse A : Le guépard",
    B: "Réponse B : Le lièvre",
    C: "Réponse C : L'autruche",
    D: "Réponse D : Le léopard",
};
let answerFour = {
    A: "Réponse A : Le requin blanc",
    B: "Réponse B : La méduse-boîte",
    C: "Réponse C : Le poisson-pierre",
    D: "Réponse D : Le poulpe à anneaux bleus",
};
let answerFive = {
    A: "Réponse A : Le dauphin",
    B: "Réponse B : Le chimpanzé",
    C: "Réponse C : Le corbeau",
    D: "Réponse D : Le rat",
};

// Déclaration du tableau contenant les objets propositions
const propositions = [answerOne, answerTwo, answerThree, answerFour, answerFive];

// Déclaration du tableaux qui contiennt les bonnes réponses
const goodAnswers = ["A", "C", "A", "B", "B"];

// Déclaration de la variable servant à compter les points
let compteurPoint = 0;

// Déclaration de la boucle pour créer le quiz
for (let i = 0; i < 5; i++) {
    let userAnswer = "";

    console.log("\n" + questions[i]);
    console.log(propositions[i].A);
    console.log(propositions[i].B);
    console.log(propositions[i].C);
    console.log(propositions[i].D);
    userAnswer = prompt("Quelle est votre réponse, A, B, C, ou D ? : ");
    if (userAnswer == goodAnswers[i]) {
        console.log("bonne réponse");
        compteurPoint = compteurPoint + 1;
        console.log("Bien joué, votre total de points est de " + compteurPoint + " points.");
    }
    else {
        console.log("Mauvaise réponse, votre total de points est de " + compteurPoint + " points.");
    }

}