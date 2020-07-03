function Personne(nom, prenom, age, matricule) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.matricule = matricule;
}

Personne.prototype.nomComplet = function () {
  return `${this.prenom} ${this.nom}`;
};

function Professeur(nom, prenom, age, matricule, coursEnseigne, prime) {
  Personne.call(this, nom, prenom, age, matricule);
  this.coursEnseigne = coursEnseigne;
  this.prime = prime;
}
function Etudiant(nom, prenom, age, matricule) {
  Personne.call(this, nom, prenom, age, matricule);
}

const pers = new Personne('a', 'b', 45, 'asc');
const pers2 = new Personne('c', 'd', 46, 'xsc');
const aladin = new Professeur(
  'aladin',
  'jojo',
  79,
  'xyzqbc',
  ['réseaux', 'admin systèmes'],
  20
);

const ndovia = new Etudiant('Ndovia', 'Ruth', 56, 'abcdefghi');
