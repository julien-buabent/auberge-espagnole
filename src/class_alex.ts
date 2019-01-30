import { Participant } from "./class_participant";
import "ns_food";
import "ns_friends";
import "ns_music";



export class Alex extends Participant{

 
    constructor(){
        super();

        this.name = "Alex";

        let listFood =  new NS_Food.Food();
        let food = {"entree":listFood.fetch('entrees')[1], "plat":listFood.fetch('plats')[3], "dessert":listFood.fetch('desserts')[0]};
        this.food = food;

        let listFriends = new NS_Friends.Friends();
        let friends = {"homme":listFriends.fetch('hommes')[5], "femme":listFriends.fetch('femmes')[1]};
        this.friends = friends;

        let listMusic = new NS_Music.Music();
        let music = listMusic.playlist()[6];
        this.music = music;
        
    }

}