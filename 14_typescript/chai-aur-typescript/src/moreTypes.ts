let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{ name: "who moved my cheese" }';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

//any and unknown

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
//newValue.toUpperCase()  this will give you a error;

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

//Never

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRoll(role: Role) {
  if (role === "admin") {
    console.log("navigating to dashboard");
    return;
  }
  if (role === "user") {
    console.log("navigating to homepage");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
