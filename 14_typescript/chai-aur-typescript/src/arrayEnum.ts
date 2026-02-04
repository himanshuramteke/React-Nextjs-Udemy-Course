const chaiFlavours: string[] = ["Masala", "Adrak", "elaichi"];
const chaiPrices: number[] = [20, 24, 35];

const rating: Array<number> = [4.5, 4.0];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 20 },
  { name: "Adrak", price: 24 },
];

//readonly arrays it cannot be changed once it defined
const cities: readonly string[] = ["Hyderabad", "Bangalore"];
//cities.push("Pune") this will give errors

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//Tuples
let chaiTuple: [string, number];
chaiTuple = ["masala", 24];
//chaiTuple = [20, "masala"] //this will give you error because you have to add values based on how you define types

let userInfo: [string, number, boolean?];
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];

//readonly tuples
const location: readonly [number, number] = [24.33, 34.33];

const chaiItems: [name: string, price: number] = ["masala", 25];

//Enums

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, //101. It will automatically get the incremental value
  CANCELLED, //102
}
enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);
//makeChai("masala"); error

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

let t: [string, number] = ["chai", 10];
t.push("extra");
