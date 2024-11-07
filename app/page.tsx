import Image from "next/image";
import CheckoutButton from "../CheckoutButton";
export default function Home() {
  const product = {
    name: "Sample Product",
    description: "A description of the product goes here.",
    price: 100, // In Naira
};

  return (
    <div style={{ padding: "20px" }}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ₦{product.price}</p>
            <CheckoutButton amount={product.price * 100} />
        </div>
  );
}
