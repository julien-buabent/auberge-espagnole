import {Participant} from "./class_participant";

export class Nick_S extends Participant
{

    constructor()
    {
        super();
        this.name = "Nick";
        this.Food_Choice();
        this.Music_Choice();
        this.choisi_amis();
        console.log(`${this.name} est prêt !`);
    }


    public Food_Choice() 
    {
        let food = new NS_Food.Food();
        this.food = 
            {
                entree: food.fetch('entrees')[1],
                plat: food.fetch('plats')[1],
                dessert: food.fetch('desserts')[1]
            }
    }

    private Music_Choice(){
        let musik = new NS_Music.Music();
        let playlist = musik.playlist();

        this.music = playlist[2];
    }
  private choisi_amis(){
    let friends = new NS_Friends.Friends();
    let hommes = friends.fetch('hommes');
    let femmes = friends.fetch('femmes');

    this.friends = {
      homme: hommes[this.getRndInteger(0, hommes.length-1)],
      femme: femmes[this.getRndInteger(0, femmes.length-1)],
    }
  }

  private getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   





}