namespace NS_Food {
  
  export class Food {

    private products = { //contains multiple arrays of product types
      'entrees': ["chips", "charcuterie", "salade", "soupe", "taboulé"],
      'plats': ["poulet", "pâtes", "frites", "couscous", "lentilles"],
      'desserts': ["tarte au chocolat", "fruits", "tiramisu", "glaçes"]
    }
    
    // gathers all elements from a specific array contained inside products
    public fetch(type: string): Array<string> { 
      if (typeof this.products[type] === 'undefined') {
        console.error(`Food: products.${type} is not defined`);
        return [''];
      } else {
        return this.products[type];
      }
    }

    // gathers element at specific index from a specific array contained inside products 
    // if no element index is specified, it returns a random element
    public fetchOne(type:string, element?:number):string{  
      let requestedArray: Array<string> = this.fetch(type);
      let index: number = (element) ? element : Math.floor(Math.random() * (requestedArray.length-1));

      if(typeof requestedArray[index] === 'undefined'){
        console.error(`Food: products.${type} was defined but ${type}[${index}] does not exist`);
        return '';
      }else{
        return requestedArray[index];
      }
    }

  }

}