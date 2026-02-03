function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Ordering chai: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving regular masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "small cutting chai...";
  }
  if (size === "medium" || size === "large") {
    return "making extra chai...";
  }

  return `chai order: ${size}`;
}

class KulhadChai {
  serve() {
    return `Serving Kulhad chai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai: ${item}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "elaichi":
      return `Elaichi chai is good`;
      break;
    case "ginger":
      return `Ginger chai is best`;
      break;
    case "masala":
      return `Masala chai is ok`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    return `MasalaChai`;
  }
}

function isStringArray(arr: unknown): arr is String[] {
  //
}
