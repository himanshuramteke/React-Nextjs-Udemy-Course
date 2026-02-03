const chai = {
  name: "elaichi",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "adrak Tea",
  price: 22,
  ingredients: ["ginger", "milk", "water", "tea leaves"],
};

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "400ml", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaicode",
  password: "123",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };
// const updateChai = (updates: Partial<Chai>) => {
//   console.log("updating chai with:", updates);
// };

// updateChai({ price: 24 });
// updateChai({ isHot: false });
// updateChai({});

type chaiOrder = {
  name?: string;
  quantity: number;
};

const placeOrder = (order: Required<chaiOrder>) => {
  console.log(order);
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;
