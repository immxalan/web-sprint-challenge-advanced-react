import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [{
    name: "Snake Plant",
    id: 4893,
    scientificName: "Sansevieria zeylanica",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
    sizes: ["small", "medium"],
    watering: 2,
    description:
      "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must.",
    price: 18,
  }]

test('remove button removes item from cart', () => {
	const { getByTestId } = render(<ShoppingCart cart={plants} />);
	const cart = getByTestId('cart');
	const button = getByTestId('remove');
	fireEvent.click(button);
	expect(cart).toHaveTextContent(/snake plant/i);
});