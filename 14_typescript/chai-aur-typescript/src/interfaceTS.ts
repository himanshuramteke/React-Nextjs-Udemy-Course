type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

//interface
//always use interface in class
interface TeaRecipe {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type ExtraMasalaChai = BaseChai & Extra;

const cup: ExtraMasalaChai = {
  teaLeaves: 5,
  masala: 4,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Himanshu" };
const u2: User = { username: "Himanshu", bio: "I am a developer" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Masterji",
  version: 1,
};
