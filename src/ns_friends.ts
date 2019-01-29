namespace NS_Friends {

  export class Friends {

    private friends = {
      'hommes': ["Benoit", "Viktor", "Nicolas", "Ahmed", "Jean Stéphane", "Esteban"],
      'femmes': ["Marie Louise", "Sonia", "Caroline", "Elisa", "Laura", "Mercedes"]
    }

    public fetch(genre: string): Array<string> {
      if(typeof this.friends[genre] === 'undefined'){
        console.error(`Friends: friends.${genre} is not defined`);
        return [''];
      } else {
        return this.friends[genre];
      }
    }

  }
}
