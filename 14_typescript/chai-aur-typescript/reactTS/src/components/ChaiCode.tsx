interface ChaiCodeProp {
  name: string;
  price: number;
}

export default function ChaiCode({ name, price }: ChaiCodeProp) {
  return (
    <article>
      <h2> {name}</h2>
      Price: {price}
      <br />
    </article>
  );
}
