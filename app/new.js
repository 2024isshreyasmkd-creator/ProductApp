import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { ProductContext } from "../context/ProductContext";
import { COLORS, FONTS, SPACING } from "./constants/theme";

export default function NewProduct() {
  const { addProduct } = useContext(ProductContext);
  const router = useRouter();

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    stock: "",
    price: "",
  });

  const handleSubmit = () => {
    addProduct({
      ...form,
      id: Date.now().toString(),
      stock: Number(form.stock),
      price: Number(form.price),
    });

    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Product</Text>

      {Object.keys(form).filter(k => k !== "id").map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field}
          placeholderTextColor={COLORS.subtitle}
          value={form[field]}
          onChangeText={(v) => setForm({ ...form, [field]: v })}
        />
      ))}

      <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Save Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.card, padding: SPACING.lg },

  heading: {
    fontSize: FONTS.h2,
    fontWeight: "800",
    color: COLORS.primary,
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
    backgroundColor: COLORS.primary,
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

