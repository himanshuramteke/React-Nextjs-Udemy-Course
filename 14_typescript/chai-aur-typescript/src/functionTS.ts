function makeChai(type: string, cups: number) {
  console.log(`Make ${type} chai with cup of ${cups} `);
}

makeChai("masala", 2);

//this will return number type, otherwise it will give error;
function getChai(): number {
  return 23;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready!");
}

// function orderChai(type?: string) {
// }

function orderChai(type: string = "masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 2;
}
