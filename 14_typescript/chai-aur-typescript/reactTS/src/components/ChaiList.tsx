import type { Chai } from "../types";
import ChaiCode from "./ChaiCode";

interface ChaiListProps {
  items: Chai[];
}

export default function ChaiList({ items }: ChaiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCode key={chai.id} name={chai.name} price={chai.price} />
      ))}
    </div>
  );
}
