import { Stack } from "expo-router";
import ProductProvider from "../context/ProductContext";

export default function RootLayout() {
  return (
    <ProductProvider>
      <Stack>
      <Stack.Screen name="index" options={{ title: 'Product Management' }} />
      <Stack.Screen name="new" options={{ title: 'New Product' }} />
      <Stack.Screen name="edit" options={{ title: 'Edit Product' }} />
    </Stack>
    </ProductProvider>
  );
}