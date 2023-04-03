/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
Utilizzate liberamente il tipo di ciclo che preferite (for, for in o for of)

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/

const teamMemb = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
];

const list = document.querySelector('ul')

for(let person of teamMemb){

  console.log('Nome',person.name, 'Ruolo',person.role, 'Immagine',person.image);

  list.innerHTML += `<li>${person.name}`;
  list.innerHTML += `<li>${person.role}`;
  list.innerHTML += `<li><img src="img/${person.image}"></li>`;
}