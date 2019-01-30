import { Participant } from './class_participant';

import "./ns_friends";
import "./ns_food";
import "./ns_music";

export default class Yan extends Participant{
  // public myFriend = NS_Friends.Friends;
  // public myFood = NS_Food.Food;
  // public myMusic = NS_Music.Music;


  constructor()
  {
    super();
    let monAmi = new NS_Friends.Friends();
    console.log(monAmi.fetch('hommes'));


    // this.name = 'sdfsdf';
    // this.food = {entree:'Olive',plat:'Champignon',dessert:'Glace'};
    // this.friends

  }



}

export { Yan }
