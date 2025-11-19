import { Stack } from "expo-router";
import ProductProvider from "../context/ProductContext";
import { COLORS } from "./constants/theme";

export default function RootLayout() {
  return (
    <ProductProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "🛒 MkStore" }}
        />
        <Stack.Screen
          name="new"
          options={{ title: "Add Product" }}
        />
        <Stack.Screen
          name="edit"
          options={{ title: "Edit Product" }}
        />
      </Stack>
    </ProductProvider>
  );
}
