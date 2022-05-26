type ClassMembers = {
  name: string;
  surname: string;
  number: number;
  subjects: string[];
}[];

const students: ClassMembers = [
  {
    name: "Cristiano",
    surname: "Franco",
    number: 1,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Giovanni",
    surname: "Omettere",
    number: 2,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Emilia",
    surname: "Ginea",
    number: 3,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Domenico",
    surname: "Cavaglieri",
    number: 4,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Gabriele",
    surname: "Marchionne",
    number: 5,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Nicola",
    surname: "Locorotondo",
    number: 6,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Daniele",
    surname: "Morello",
    number: 7,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
  {
    name: "Marco",
    surname: "Soda",
    number: 8,
    subjects: ["Html", "CSS", "JavaScripr", "Angular"],
  },
];

const teachers: ClassMembers = [
  {
    name: "Dario",
    surname: "Mennillo",
    number: 1,
    subjects: ["Angular"],
  },
  {
    name: "Giovanni",
    surname: "Silvestri",
    number: 2,
    subjects: ["Html", "CSS", "JavaScripr"],
  },
  {
    name: "Antonio",
    surname: "Boezio",
    number: 3,
    subjects: ["Versioning"],
  },
  {
    name: "Mario",
    surname: "Marzullo",
    number: 4,
    subjects: ["Safety"],
  },
];

//DOM Elements
const studentSection = document.querySelector(".students");
const teacherSection = document.querySelector(".teachers");

//JS ES6 version
const printCards = (element: Element, list: any) => {
  list.forEach((item: any) => {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `<h1>${item.name} ${item.surname}</h1>
                        <p>Number: 00${item.number.toString()}</p>
                        <p>Subjects: ${item.subjects}`;

    element.appendChild(article);
  });
};

printCards(studentSection, students);
printCards(teacherSection, teachers);

//JS ES5 version
const printCardsJS = (element: Element, list: any) => {
  list.forEach((item: any) => {
    let article = document.createElement("article");
    article.classList.add("card");
    const articleTitle = document.createElement("h1");
    articleTitle.textContent = `${item.name} ${item.surname}`;
    article.appendChild(articleTitle);
    const articleNumber = document.createElement("p");
    articleNumber.textContent = `Number: 00${item.number.toString()}`;
    article.appendChild(articleNumber);
    const articleSubjects = document.createElement("p");
    articleSubjects.textContent = `Subjects: ${item.subjects}`;
    article.appendChild(articleSubjects);
    article.classList.add("card");

    element.appendChild(article);
  });
};
