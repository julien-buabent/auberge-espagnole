import {food, friends} from './class_participant';
import Participant from './class_participant';

interface wishList{
  food: food,
  music: string,
  friends: friends
}

export default class Emir_b extends Participant{

  protected _wishlist:wishList;
  // constructor
  // constructWishlist=()=>{
  //   this._wishlist["food"] = this.food;
  //   this._wishlist["music"] = this.music;
  //   this._wishlist["food"] = this.food;
  // }
}
