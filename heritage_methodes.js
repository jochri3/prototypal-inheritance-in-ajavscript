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
//Professeur hérite des méthode de personne
Professeur.prototype = Object.create(Personne.prototype);
Professeur.prototype.constructor = Professeur;

function Etudiant(nom, prenom, age, matricule) {
  Personne.call(this, nom, prenom, age, matricule);
}
Etudiant.prototype = Object.create(Personne.prototype);
Etudiant.prototype.constructor = Professeur;

const aladin = new Professeur(
  'aladin',
  'jojo',
  79,
  'xyzqbc',
  ['réseaux', 'admin systèmes'],
  20
);

const ndovia = new Etudiant('Ndovia', 'Ruth', 56, 'abcdefghi');
