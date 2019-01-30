import Participant from './class_participant';
import './ns_music';

// let food = require('./ns_food.ts');
// let friends = require('./ns_friends.ts');
// let music = require('./ns_music.ts');


export default class Amandine_m extends Participant {

    // public leFood = new food();
    public laMusic = new NS_Music.Music();
    // public friends = new friends();
    

    constructor() {
        super();
        this.name = 'Amandine';
        let listeMusic = this.laMusic.playlist();
        // this.leFood.fetch() =  ;
        
        console.log(listeMusic);
    };

}
