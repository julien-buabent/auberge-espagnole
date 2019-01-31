import Participant from './class_participant';
import "./ns_food";
import "./ns_music";
import "./ns_friends";
import {food, friends} from "./class_participant";
import * as tools from "./tools";

let foodList = new NS_Food.Food();
let friendList = new NS_Friends.Friends();
let musicList = new NS_Music.Music();

let listHommes:string[] = friendList.fetch("hommes");
let listFemmes:string[] = friendList.fetch("femmes");
let listMusic:string[] = musicList.playlist();

export default class Emir extends Participant{
  private _entree:string;
  private _plat:string;
  private _dessert:string;
  private _amiHomme:string;
  private _amiFemme:string;
  
  constructor(){
    super();
    this.name = "Emir";
    this.entree = foodList.fetchOne("entrees");
    this.plat = foodList.fetchOne("plats");
    this.dessert = foodList.fetchOne("desserts");
    let myFood:food = {entree:this.entree, plat:this.plat, dessert:this.dessert};
    this.food = myFood;
    this.amiHomme = this.getRandomItem(listHommes);
    this.amiFemme = this.getRandomItem(listFemmes);
    let myFriends:friends = {homme:this.amiHomme, femme:this.amiFemme};
    this.friends = myFriends;
    this.music = this.getRandomItem(listMusic);
  }

  get entree():string{
    return this._entree;
  }
  set entree(article:string){
    this._entree = article;
  }
  get plat():string{
    return this._plat;
  }
  set plat(article:string){
    this._plat = article;
  }
  get dessert():string{
    return this._dessert;
  }
  set dessert(article:string){
    this._dessert = article;
  }
  get amiHomme():string{
    return this._amiHomme;
  }
  set amiHomme(person:string){
    this._amiHomme = person;
  }
  get amiFemme():string{
    return this._amiFemme;
  }
  set amiFemme(person:string){
    this._amiFemme = person;
  }
  getRandomItem = (bucket:string[]):string => {
    let bucketLength = bucket.length;
    let randomElementIndex:number = tools.getRandomNumberBetween(0, bucketLength-1);
    return bucket[randomElementIndex];
  };
}
