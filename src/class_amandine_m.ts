import Participant from './class_participant';
import './ns_music';
import './ns_food';
import './ns_friends';

export default class Amandine_m extends Participant {

    public laMusic = new NS_Music.Music();
    public LeFood = new NS_Food.Food();
    public LesAmis = new NS_Friends.Friends();

    constructor() {
        super();
        this.name = 'Amandine';

        let listeMusic = this.laMusic.playlist();
        this.music = listeMusic[6];

        let dessertFood = this.LeFood.fetch('desserts');
        let entreeFood = this.LeFood.fetch('entrees');
        let platFood = this.LeFood.fetch('plats');
        this.food = {
            dessert : dessertFood[3],
            entree: entreeFood[1],
            plat: platFood[2]
        };

        let ami = this.LesAmis.fetch('hommes');
        let amie = this.LesAmis.fetch('femmes');
        this.friends = {
            homme: ami[0],
            femme: amie[5],
        }
    };
}
