import Participant from "./class_participant";
import "./ns_food";
import "./ns_music";
import "./ns_friends";

let foodCorinne = new NS_Food.Food();
let musicCorinne = new NS_Music.Music();
let friendsCorinne = new NS_Friends.Friends();


export default class Corinne_F extends Participant{
    
    constructor(){
        super();
        this.name = "Corinne_F";
        
        let entreeCorinne = foodCorinne.fetch("entrees")[0];
        let platCorinne = foodCorinne.fetch("plats")[0];
        let dessertCorinne = foodCorinne.fetch("desserts")[0];
        this.food = {   
                        entree: entreeCorinne,
                        plat: platCorinne,
                        dessert:dessertCorinne
                    };

        let listMusic = musicCorinne.playlist();
        this.music = listMusic[5];

        let invitHommeCo = friendsCorinne.fetch("hommes")[0];
        let invitFemmeCo = friendsCorinne.fetch("femmes")[2];
        this.friends =  {
                            homme: invitHommeCo,
                            femme: invitFemmeCo
                        };
        
    }

}

