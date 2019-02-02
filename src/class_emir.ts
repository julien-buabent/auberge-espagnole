import Participant, {food, friends} from './class_participant';
import "./ns_food";
import "./ns_music";
import "./ns_friends";
import * as tools from "./tools";

export default class Emir extends Participant{
  
  constructor(){
    super();
    this.name = "Emir";
    this.buildFoodList();
    this.buildFriendsList();
    this.selectMusic();
    this.declareReady();
  } 

  private buildFoodList():void{
    let foodList = new NS_Food.Food();
    let myEntree:string = foodList.fetchOne("entrees");
    let myPlat:string = foodList.fetchOne("plats");
    let myDessert:string = foodList.fetchOne("desserts");
    this.food = {entree: myEntree, plat: myPlat, dessert:myDessert};
  }  

  private buildFriendsList():void{
    let friendList = new NS_Friends.Friends();
    let listHommes:string[] = friendList.fetch("hommes");
    let listFemmes:string[] = friendList.fetch("femmes");
    this.friends = {homme:tools.getRandomItem(listHommes), femme:tools.getRandomItem(listFemmes)};
  }

  private selectMusic():void{
    let musicList = new NS_Music.Music();
    this.music = tools.getRandomItem(musicList.playlist());
  }
  

}
