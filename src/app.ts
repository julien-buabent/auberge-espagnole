console.log(`Lancement du script de gestion d'auberge espagnole`);
import * as $ from 'jquery';
import Participant from './class_participant';
import Yan from './class_yan';
let participants:Array<Participant> = [];




//A FAIRE
//Importez votre classe et instanciez votre objet à la suite



//Julien Formateur TEST
import Julien_B from './class_julien_b';
let julien = new Julien_B();
participants.push(julien);

/*
A vous =>
<<<<<<< Updated upstream
...*/
import Benoit from './class_benoit';
let benoit = new Benoit();
console.log(benoit)
participants.push(benoit)
/*...
=======
//Emir - Alternant
*/
import Emir from './class_emir';
let emir = new Emir();
// console.dir(emir);
participants.push(emir);
/*...
...
>>>>>>> Stashed changes
...
*/
//FIN
let yan = new Yan();
participants.push(yan);


console.dir(participants);
for(let invite of participants){
  let str = '';
  str += '<tr>';
  str += `<td>${invite.name}</td>`;
  str += `<td>Entrée : ${invite.food.entree}<br />Plat : ${invite.food.plat}<br />Dessert : ${invite.food.dessert}</td>`;
  str += `<td>${invite.music}</td>`;
  str += `<td>Homme : ${invite.friends.homme}<br />Femme : ${invite.friends.femme}</td>`;
  str += '</tr>';
  $('#participants').append(str);
}
