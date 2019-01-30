console.log(`Lancement du script de gestion d'auberge espagnole`);
import * as $ from 'jquery';
import Participant from './class_participant';
let participants:Array<Participant> = [];



//A FAIRE
//Importez votre classe et instanciez votre objet à la suite


/*
//Julien Formateur TEST
import Julien_B from './class_julien';
let julien = new Julien_B();
participants.push(julien);
*/

/*
A vous =>
...
...
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
