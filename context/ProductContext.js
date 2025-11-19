import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Laptop",
      description: "Dell Inspiron 3511, 8GB RAM, 512GB SSD",
      stock: 10,
      price: 45000,
      image: "https://m.media-amazon.com/images/I/71Vum7DnVBL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "2",
      name: "Samsung S24Ultra",
      description: "8GB RAM · 128GB Storage · 64MP SonyCamera",
      stock: 5,
      price: 22000,
      image: "https://dakauf.eu/wp-content/uploads/2024/02/Samsung-Galaxy-S24-Ultra-Titanium-Black.jpg",
    },
  ]);

  // ⭐ ADD PRODUCT
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // ⭐ UPDATE PRODUCT
  const updateProduct = (updated) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  // ⭐ DELETE PRODUCT (NEW FEATURE)
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
