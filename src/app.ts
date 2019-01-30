console.log(`Lancement du script de gestion d'auberge espagnole`);
import * as $ from 'jquery';
import Participant from './class_participant';
import {Alex} from './class_alex';
import Yan from './class_yan';
<<<<<<< HEAD
import Amandine_m from './class_amandine_m'
=======
import Cyril from './class_cyril';
>>>>>>> c054f1845e0da2dba8c7e06b9cd43ad833d24128
let participants:Array<Participant> = [];

import {Denis} from './class_denis';
let denis = new Denis();
participants.push(denis);




//A FAIRE
//Importez votre classe et instanciez votre objet à la suite






//Julien Formateur TEST
import Julien_B from './class_julien_b';
let julien = new Julien_B();
participants.push(julien);

let alex = new Alex();
participants.push(alex)

//////////////// PARTICIPANT NICK /////////////////
import {Nick_S} from "./class_Nick_S";
let Nick = new Nick_S();
participants.push(Nick);


///////////////// END PARTICIPANT NICK ///////////

/*
A vous =>
...*/
import Benoit from './class_benoit';
let benoit = new Benoit();
console.log(benoit)
participants.push(benoit)
/*...
//Emir - Alternant
*/
import Emir from './class_emir';
let emir = new Emir();
// console.dir(emir);
participants.push(emir);
/*...
...
...
*/

//  DEB KEVIN PART
import Kevin974 from "./Kevin974.class";

// Création de Moi en local pour pas avoir de conflit avec les autres Kévins
(() => {
	let k = new Kevin974();
	participants.push(k);
})();
// FIN KEVIN PART
//FIN



let amandine = new Amandine_m();
participants.push(amandine);

let yan = new Yan();
// participants.push(yan);

import Cyril from './class_cyril';
let cyril = new Cyril();
participants.push(cyril);




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


