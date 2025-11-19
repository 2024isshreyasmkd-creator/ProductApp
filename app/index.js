import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/edit", params: item }} asChild>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>₹ {item.price}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />

      <Link href="/new" asChild>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.btnText}>+ Add New Product</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  item: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: "600" },
  addBtn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
});