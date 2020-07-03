function Professeur(nom, prenom, age, matricule, coursEnseigne, prime) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.matricule = matricule;
  this.coursEnseigne = coursEnseigne;
  this.prime = prime;
  this.nomComplet = function () {
    return `${this.prenom} ${this.nom}`;
  };
}

function Etudiant(nom, prenom, age, matricule) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.matricule = matricule;
  this.nomComplet = function () {
    return `${this.prenom} ${this.nom}`;
  };
}

//Cration du professeur
{
}
const aladin = new Professeur(
  'aladin',
  'jojo',
  79,
  'xyzqbc',
  ['réseaux', 'admin systèmes'],
  20
);

const ndovia = new Etudiant('Ndovia', 'Ruth', 56, 'abcdefghi');
