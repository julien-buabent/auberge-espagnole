console.log(`Lancement du script de gestion d'auberge espagnole`);
import * as $ from 'jquery';
import Participant from './class_participant';
import {Alex} from './class_alex';
import Yan from './class_yan';
import Amandine_m from './class_amandine_m'
import Cyril from './class_cyril';
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


/*
A vous =>
...*/
import Benoit from './class_benoit';
let benoit = new Benoit();
//console.log(benoit)
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
//FIN



// DEB KEVIN PART
import Kevin974 from './Kevin974.class';
(() => {
	let k = new Kevin974();
	participants.push(k);
})();
// FIN KEVIN PART




let yan = new Yan();
//participants.push(yan);

import Corinne_F from './class_corinne';
let corinne = new Corinne_F();
participants.push(corinne);
// participants.push(yan);

let cyril = new Cyril();
participants.push(cyril);


let amandine = new Amandine_m();
participants.push(amandine);



for(let invite of participants){
  //we check if name is defined. If not we pass "undefined" as string
  invite.name = (typeof invite.name !== 'undefined') ? invite.name : "undefined";

  //we check if music is defiend. if not we pass "undefined" as string
  invite.music = (typeof invite.music !== 'undefined') ? invite.music : "undefined";

  //we check if food object is defined. if not, we pass a food object with all elements "undefined" as string
  invite.food = (typeof invite.food !== 'undefined') ? invite.food : {entree: "undefined", plat: "undefined", dessert: "undefined"};
  //we check if each element of food object is defined. IF not, we pass "undefined" as string for that element 
  for(let foodType in invite.food){
    foodType = (typeof foodType !== 'undefined') ? foodType : "undefined";
  }
  
  //we check if friends object is defined. if not, we pass a friends object with all elements "undefined" as string
  invite.friends = (typeof invite.friends !== 'undefined') ? invite.friends : {homme: "undefined", femme: "undefined"};
  //we check if each element of friends object is defined. IF not, we pass "undefined" as string for that element 
  for(let friendType in invite.friends){
    friendType = (typeof friendType !== 'undefined') ? friendType : "undefined";
  }

  let str = '';
  str += '<tr>';
  str += `<td>${invite.name}</td>`;
  str += `<td>Entrée : ${invite.food.entree}<br />Plat : ${invite.food.plat}<br />Dessert : ${invite.food.dessert}</td>`;
  str += `<td>${invite.music}</td>`;
  str += `<td>Homme : ${invite.friends.homme}<br />Femme : ${invite.friends.femme}</td>`;
  str += '</tr>';
  $('#participants').append(str);
}














