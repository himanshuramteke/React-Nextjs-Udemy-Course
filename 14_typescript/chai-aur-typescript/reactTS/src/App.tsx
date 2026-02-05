import "./App.css";
import Card from "./components/Card.tsx";
import ChaiCode from "./components/ChaiCode";
import ChaiList from "./components/ChaiList.tsx";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 25 },
  { id: 2, name: "Ginger", price: 20 },
  { id: 1, name: "Elaichi", price: 30 },
];

function App() {
  return (
    <>
      <h1>Vite with Typescript</h1>
      <ChaiCode name="headphones" price={4000} />
      <ChaiCode name="SmartPhones" price={20000} />
      <ChaiCode name="Watches" price={3000} />
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log(order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Chai aur Typescript" footer={<button>Order now</button>} />
      </div>
    </>
  );
}

export default App;
