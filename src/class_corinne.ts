import Participant from "./class_participant";
import "./ns_food";
import "./ns_music";

//let foodCorinne = new NS_Food.Food;
let musicCorinne = new NS_Music.Music;
let listMusic = musicCorinne.playlist();
console.log(listMusic[0]);

export default class Corinne_F extends Participant{
    constructor(){
        super();
        this.name = "Corinne_F";
        //this.food= foodCorinne.fetch[0];
        //this.music=string;
        //this._friends= friends;
    }

}

console.log(this.food);