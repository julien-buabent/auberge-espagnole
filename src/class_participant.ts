//INTERFACE
interface food {
  entree: string,
  plat: string,
  dessert: string
}
interface friends {
  homme: string,
  femme: string
}

export default class Participant {

  private _name: string;
  private _food: food;
  private _music: string;
  private _friends: friends;

  get name(): string {
    return this._name;
  }
  get food(): food {
    return this._food;
  }
  get music(): string {
    return this._music;
  }
  get friends():friends {
    return this._friends;
  }

  set name(name: string) {
    this._name = name;
  }
  set food(food:food) {
    this._food = food;
  }
  set music(artist:string) {
    this._music = artist;
  }
  set friends(invites:friends) {
    this._friends = invites;
  }

}

export { Participant }
