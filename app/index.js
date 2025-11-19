import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

import { ProductContext } from "../context/ProductContext";
import { COLORS, FONTS, SPACING, SHADOW } from "./constants/theme";

export default function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 MkStore</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/edit", params: item }} asChild>
            <TouchableOpacity style={styles.card}>
              <Image
                source={
                  item.image
                    ? { uri: item.image }
                    : require("../assets/icon.png")
                }
                style={styles.productImg}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />

      {/* Floating Add Button */}
      <Link href="/new" asChild>
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabText}>＋</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: SPACING.lg,
  },

  header: {
    fontSize: FONTS.h1,
    fontWeight: "900",
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },

  card: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 12,
    marginBottom: SPACING.md,
    ...SHADOW.card,
  },

  productImg: {
    width: 70,
    height: 70,
    marginRight: SPACING.md,
  },

  name: {
    fontSize: FONTS.large,
    fontWeight: "700",
    color: COLORS.text,
  },

  desc: {
    fontSize: FONTS.small,
    color: COLORS.subtitle,
    marginVertical: 4,
  },

  price: {
    fontSize: FONTS.large,
    color: COLORS.secondary,
    fontWeight: "bold",
  },

  fab: {
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  fabText: {
    color: "white",
    fontSize: 35,
    marginTop: -4,
  },
});
