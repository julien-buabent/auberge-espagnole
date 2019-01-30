//importer les tools avec
//  import * as tools from "./tools";
//et utiliser avec
//  tools.nomDeFonction();

export let getRandomNumberBetween = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min) ) + min;
};
