const urlParams = new URLSearchParams(window.location.search);
const nom = urlParams.get('nom');
const objectif = urlParams.get('objectif');
const sexe = urlParams.get('sexe');
const age = urlParams.get('age');
const taille = urlParams.get('taille');
const poids = urlParams.get('poids');
const niveau = urlParams.get('niveau');
const jours = urlParams.getAll('jours');
const duree = urlParams.get('duree');
const contraintes = urlParams.get('contraintes') || 'Aucune';
const materiel = urlParams.get('materiel');

const output = `
  <p>Bonjour ${nom} 👋</p>
  <p>Tu veux atteindre l’objectif suivant : <strong>${objectif}</strong></p>
  <p>Tu es un(e) <strong>${sexe}</strong> de <strong>${age} ans</strong>, mesurant <strong>${taille} cm</strong> et pesant <strong>${poids} kg</strong>.</p>
  <p>Niveau sportif : <strong>${niveau}</strong></p>
  <p>Jours disponibles : <strong>${jours.join(', ')}</strong></p>
  <p>Durée max par séance : <strong>${duree} minutes</strong></p>
  <p>Contraintes : <strong>${contraintes}</strong></p>
  <p>Matériel disponible : <strong>${materiel}</strong></p>
`;

document.getElementById("resultat").innerHTML = output;