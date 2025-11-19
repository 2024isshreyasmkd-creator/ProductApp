import { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { ProductContext } from "../context/ProductContext";
import { COLORS, FONTS, SPACING } from "./constants/theme";

export default function EditProduct() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { updateProduct } = useContext(ProductContext);

  const [form, setForm] = useState({ ...params });

  const handleSave = () => {
    updateProduct({
      ...form,
      stock: Number(form.stock),
      price: Number(form.price),
    });

    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Product</Text>

      <TextInput
        style={styles.input}
        placeholder="name"
        value={form.name}
        onChangeText={(v) => setForm({ ...form, name: v })}
      />

      <TextInput
        style={styles.input}
        placeholder="description"
        value={form.description}
        onChangeText={(v) => setForm({ ...form, description: v })}
      />

      <TextInput
        style={styles.input}
        placeholder="stock"
        value={form.stock}
        onChangeText={(v) => setForm({ ...form, stock: v })}
      />

      <TextInput
        style={styles.input}
        placeholder="price"
        value={form.price}
        onChangeText={(v) => setForm({ ...form, price: v })}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.btnText}>Update Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.card, padding: SPACING.lg },

  heading: {
    fontSize: FONTS.h2,
    fontWeight: "800",
    color: COLORS.secondary,
    marginBottom: SPACING.md,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: SPACING.md,
    borderRadius: 10,
    backgroundColor: COLORS.bg,
    marginBottom: SPACING.md,
  },

  saveBtn: {
    backgroundColor: COLORS.secondary,
    padding: SPACING.md,
    borderRadius: 10,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTS.large,
    fontWeight: "600",
  },
});
