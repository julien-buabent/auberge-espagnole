namespace NS_Food {

  export class Food {

    private products = {
      'entrees': ["chips", "charcuterie", "salade", "soupe", "taboulé"],
      'plats': ["poulet", "pâtes", "frites", "couscous", "lentilles"],
      'desserts': ["tarte au chocolat", "fruits", "tiramisu", "glaçes"]
    }

    public fetch(type: string): Array<string> {
      if (typeof this.products[type] === 'undefined') {
        console.error(`Food: products.${type} is not defined`);
        return [''];
      } else {
        return this.products[type];
      }
    }
  }

}
