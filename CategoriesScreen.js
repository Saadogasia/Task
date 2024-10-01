import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import workerdata from "./workerprofiledata.json";
import { categories } from "./categoriesdata";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWorkers = workerdata.workers.filter((worker) => {
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      worker.category === selectedCategory;
    const matchesSearch = worker.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Category Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedCategory(category.Worker_Role)}
            >
              <View style={styles.categoryItem}>
                <Image
                  source={category.icon}
                  style={[
                    styles.categoryIcon,
                    selectedCategory === category.Worker_Role &&
                      styles.selectedIcon,
                  ]}
                />
                <Text style={styles.categoryText}>{category.Worker_Role}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        {/* Worker Grid */}
        <View style={styles.workerGrid}>
          {filteredWorkers.map((worker) => (
            <View key={worker.id} style={styles.workerItem}>
              <Image
                source={{ uri: worker.profileImage }}
                style={styles.profileImage}
              />
              <Image
                source={{ uri: worker.countryFlag }}
                style={styles.countryFlag}
              />
              <Text style={styles.name}>{worker.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryScroll: {
    backgroundColor: "#F2F3F4",
    marginTop: 40,
    marginBottom: 10,
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  selectedIcon: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  workerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  workerItem: {
    width: width / 4,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  profileImage: {
    height: 65,
    width: 65,
    borderRadius: 35,
  },
  countryFlag: {
    height: 20,
    width: 20,
    borderRadius: 15,
    position: "absolute",
    right: 7,
    borderColor: "white",
  },
  name: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F2F3F4",
    borderRadius: 30,
    width: "97%",
    alignSelf: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
});
