import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: "1", name: "Laptop", description: "Dell Laptop", stock: 10, price: 45000 },
    { id: "2", name: "Mobile", description: "Samsung A52", stock: 5, price: 22000 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updated) => {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
}