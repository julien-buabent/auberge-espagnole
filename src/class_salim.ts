import Participant from "./class_participant";
import "./ns_food";
import "./ns_music";
import "./ns_friends";

let food = new NS_Food.Food();
let music = new NS_Music.Music();
let friends = new NS_Friends.Friends();

export class salim extends Participant {
    constructor() {
        super();
        this.name = "salim";
        this.food = {
            "entree": food.fetch("entrees")[4],
            "plat": food.fetch("plats")[1],
            "dessert": food.fetch("desserts")[1]
        };
        this.music = music.playlist()[4];
        this.friends = {
            "homme": friends.fetch("hommes")[1],
            "femme": friends.fetch("femmes")[0]
        }
    }
}
    