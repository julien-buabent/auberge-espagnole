import { Participant } from './class_participant';


import "./ns_friends";
import "./ns_food";
import "./ns_music";

export default class Yan extends Participant{
  public listeAmisHommes = [];
  public listeAmisFemmes = [];
  public _entree = [];
  public _plat = [];
  public _dessert = [];
  public _musik = []

  constructor()
  {
    super();
    let monami = new NS_Friends.Friends();
    this.listeAmisHommes = monami.fetch('hommes');
    this.listeAmisFemmes = monami.fetch('femmes');

    let maBouffe = new NS_Food.Food();
    this._entree = maBouffe.fetch('entrees');
    this._plat = maBouffe.fetch('plats');
    this._dessert = maBouffe.fetch('desserts')

    let musik = new NS_Music.Music();
    this._musik = musik.playlist();
    this.music = this._musik[2];

    this.name = 'Yan';

    this.Amis();
    this.Bouffe();
  }

  Amis(){
    this.friends = { homme: this.listeAmisHommes[2], femme:this.listeAmisFemmes[1]}
  }

  Bouffe(){
    this.food = {entree: this._entree[1], plat:this._plat[2], dessert:this._dessert[3]}
  }
}

export { Yan }
