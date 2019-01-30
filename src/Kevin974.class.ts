import Participant from "./class_participant";
import "./ns_food";
import "./ns_friends";
import "./ns_music";

let listFood = new NS_Food.Food();
let listAmis = new NS_Friends.Friends();
let listMusic = new NS_Music.Music();

export default class Kevin974 extends Participant{
	constructor(){
		super();

		this.name 		= "Moi";
		this.food 		= this.defineFood();
		this.friends 	= this.defineFriends();
		this.music 		= "undefined"; // listMusic.playlist()[0];
	}

	defineFood(){
		let entreeChoisi 	= listFood.fetch("entrees")[0];
		let platChoisi		= listFood.fetch("plats")[2];
		let dessertChoisi 	= listFood.fetch("desserts")["1"];

		return {"entree" : entreeChoisi,
				"plat" : platChoisi,
				"dessert" : dessertChoisi
				};
	}

	defineFriends(){
		let ami = "Moi"; // listAmis.fetch("homme")[0];
		let amie = "Pas moi"; // listAmis.fetch("femme")[0];

		return {"homme" : ami,
				"femme" : amie
				};
	}
}