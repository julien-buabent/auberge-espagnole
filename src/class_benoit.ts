import Participant from './class_participant';
import "./ns_food";
import "./ns_music";
import "./ns_friends";

//Création du menu Food
let freshFood = new NS_Food.Food()
let foodEntree = freshFood.fetch('entree');
let foodPlat = freshFood.fetch('plats');
let foodDessert = freshFood.fetch('desserts');
let myMenu = {'plat' : foodEntree[2],"entree" : foodPlat[5],"dessert": foodDessert[2]}

//Création de ma liste d'amis
let friendslist = new NS_Friends.Friends()
let myFriendHomme = friendslist.fetch('Homme')
let myFriendFemme = friendslist.fetch('Homme')
let myfriend = {"femme": myFriendFemme[1] ,"homme" : myFriendHomme[2] }

let musicList = new NS_Music.Music()
let mymusic = musicList.playlist()
let mySound = mymusic[1]

export default class Benoit extends Participant{
  constructor(){
   super();
   this.name = 'Benoit';
   this.music = mySound;
   this.food = myMenu;
   this.friends = myfriend;
  }
}
