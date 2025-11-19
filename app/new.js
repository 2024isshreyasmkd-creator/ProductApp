import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ProductContext } from "../context/ProductContext";
import { router } from "expo-router";

export default function NewProduct() {
  const { addProduct } = useContext(ProductContext);

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    stock: "",
    price: "",
  });

  const handleSubmit = () => {
    addProduct({ ...form, id: Date.now().toString(), stock: Number(form.stock), price: Number(form.price) });
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>

      {Object.keys(form).filter(k=>k!=="id").map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field}
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
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  saveBtn: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
});