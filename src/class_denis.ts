import Participant from "./class_participant";
import "./ns_food";
import "./ns_music";
import "./ns_friends";

let food = new NS_Food.Food();
let music = new NS_Music.Music();
let friends = new NS_Friends.Friends();

export class Denis extends Participant {
    constructor() {
        super();
        this.name = "Denis";
        this.food = {
            "entree": food.fetch("entrees")[2],
            "plat": food.fetch("plats")[3],
            "dessert": food.fetch("desserts")[2]
        };
        this.music = music.playlist()[6];
        this.friends = {
            "homme": friends.fetch("hommes")[1],
            "femme": friends.fetch("femmes")[0]
        }
    }
}
    
