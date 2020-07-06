const Personne = {
  nom: 'Defaut',
  prenom: 'Defaut',
  age: 0,
  matricule: 'Defaut',
  nomComplet: function () {
    return `${this.prenom} ${this.nom}`;
  },
  direBonjour: function () {
    return `Bonjour ${this.prenom} ${this.nom}`;
  },
  direMonAge: function () {
    return `Je suis ${this.prenom} ${this.nom}, et j'ai ${this.age} ans`;
  },
  getNom: function () {
    return this.nom;
  },
  setNom: function (nom) {
    this.nom = nom;
  },
};

const Professeur = Object.create(Personne);
Professeur.coursEnseigne = [];
Professeur.prime = 0;

const SuperProfesseur = Object.create(Professeur);
SuperProfesseur.titreAcademique = [];

const Etudiant = Object.create(Personne);
Etudiant.coursIncrits = [];
Etudiant.direBonjour = function () {
  return `Mbote nayo ${this.prenom} ${this.nom}`;
};

//objects à manipuler
const tournesol = Object.create(Professeur);
const joseph = Object.create(Etudiant);
