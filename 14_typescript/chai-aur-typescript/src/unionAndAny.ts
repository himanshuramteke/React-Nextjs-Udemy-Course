//Union in TS

let subs: number | string = "1M";
let mySubs: number | string = 100;

//we can annotate custom data-types also;
let apiRequestStatus: "pending" | "success" | "error" = "success";
let airLineSeat: "aisle" | "middle" | "window" = "window";

airLineSeat = "aisle";

const orders = ["12", "24", "30", "34"];

//any in TS
//avoid 'any' datatype in ts
let currentOrder: string | any;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}
console.log(currentOrder);
