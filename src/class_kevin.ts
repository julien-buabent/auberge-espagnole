import { Participant } from './class_participant';
import './ns_music';
import './ns_friends';
import './ns_food';

export default class Kevin extends Participant {

  public constructor() {
    super();
    this.name = "Kévin Dupas";
    this.celinedion();
    this.jai_pas_damis();
    this.miam();
  }

  public celinedion(){
    let music = new NS_Music.Music();
    let playlist = music.playlist();

    this.music = playlist[this.random(0, playlist.length-1)];
  }
  public jai_pas_damis(){
    let friends = new NS_Friends.Friends();
    let hommes = friends.fetch('hommes');
    let femmes = friends.fetch('femmes');

    this.friends = {
      homme: hommes[this.random(0, hommes.length-1)],
      femme: femmes[this.random(0, femmes.length-1)],
    }
  }

  public miam() {
    let food = new NS_Food.Food();
    let entrees = food.fetch('entrees');
    let plats = food.fetch('plats');
    let desserts = food.fetch('desserts');

    this.food = {
      entree: entrees[this.random(0, entrees.length - 1)],
      plat: plats[this.random(0, plats.length - 1)],
      dessert: desserts[this.random(0, desserts.length - 1)]
    }
  }

  public random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
