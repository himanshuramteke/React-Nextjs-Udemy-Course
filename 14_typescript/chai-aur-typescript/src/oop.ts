// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }

//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);
//   }
// }

// const masalaChai = new Chai("Ginger", 20);
// masalaChai.flavour = "masala";

class Chai {
  public flavour: string = "Masala";
  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients;
  }
}

class Shop {
  protected shopName = "Chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const c = new ModernChai();
c.sugar = 3;
