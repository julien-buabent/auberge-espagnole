import Participant, {food, friends} from './class_participant';
import "./ns_food";
import "./ns_music";
import "./ns_friends";
import * as tools from "./tools";

let foodList = new NS_Food.Food();
let friendList = new NS_Friends.Friends();
let musicList = new NS_Music.Music();

export default class Emir extends Participant{
  
  constructor(){
    super();
    this.name = "Emir";
    this.food = {entree:foodList.fetchOne("entrees"), plat:foodList.fetchOne("plats"), dessert:foodList.fetchOne("desserts")};
    this.friends = {homme:this.getRandomItem(friendList.fetch("hommes")), femme:this.getRandomItem(friendList.fetch("femmes"))};
    this.music = this.getRandomItem(musicList.playlist());
    this.declareReady();
  }

 
  getRandomItem = (bucket:string[]):string => {
    let bucketLength = bucket.length;
    let randomElementIndex:number = tools.getRandomNumberBetween(0, bucketLength-1);
    return bucket[randomElementIndex];
  };
}
