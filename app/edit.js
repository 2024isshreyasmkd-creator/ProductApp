import { useContext, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ProductContext } from "../context/ProductContext";

export default function EditProduct() {
  const params = useLocalSearchParams();
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
      <Text style={styles.title}>Edit Product</Text>

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
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  saveBtn: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
});