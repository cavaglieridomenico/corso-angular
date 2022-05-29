var students = [
    {
        name: "Cristiano",
        surname: "Franco",
        number: 1,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Giovanni",
        surname: "Omettere",
        number: 2,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Emilia",
        surname: "Ginea",
        number: 3,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Domenico",
        surname: "Cavaglieri",
        number: 4,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Gabriele",
        surname: "Marchionne",
        number: 5,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Nicola",
        surname: "Locorotondo",
        number: 6,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Daniele",
        surname: "Morello",
        number: 7,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
    {
        name: "Marco",
        surname: "Soda",
        number: 8,
        subjects: ["Html", "CSS", "JavaScripr", "Angular"]
    },
];
var teachers = [
    {
        name: "Dario",
        surname: "Mennillo",
        number: 1,
        subjects: ["Angular"]
    },
    {
        name: "Giovanni",
        surname: "Silvestri",
        number: 2,
        subjects: ["Html", "CSS", "JavaScripr"]
    },
    {
        name: "Antonio",
        surname: "Boezio",
        number: 3,
        subjects: ["Versioning"]
    },
    {
        name: "Mario",
        surname: "Marzullo",
        number: 4,
        subjects: ["Safety"]
    },
];
//DOM Elements
var studentSection = document.querySelector(".students");
var teacherSection = document.querySelector(".teachers");
//JS ES6 version
var printCards = function (element, list) {
    list.forEach(function (item) {
        var article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = "<h1>".concat(item.name, " ").concat(item.surname, "</h1>\n                        <p>Number: 00").concat(item.number.toString(), "</p>\n                        <p>Subjects: ").concat(item.subjects);
        element.appendChild(article);
    });
};
printCards(studentSection, students);
printCards(teacherSection, teachers);
//JS ES5 version
var printCardsJS = function (element, list) {
    list.forEach(function (item) {
        var article = document.createElement("article");
        article.classList.add("card");
        var articleTitle = document.createElement("h1");
        articleTitle.textContent = "".concat(item.name, " ").concat(item.surname);
        article.appendChild(articleTitle);
        var articleNumber = document.createElement("p");
        articleNumber.textContent = "Number: 00".concat(item.number.toString());
        article.appendChild(articleNumber);
        var articleSubjects = document.createElement("p");
        articleSubjects.textContent = "Subjects: ".concat(item.subjects);
        article.appendChild(articleSubjects);
        article.classList.add("card");
        element.appendChild(article);
    });
};
