import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { names } from "./names";

const namesAsObject = names.map((item) => {
  return {
    name: item,
  };
});

export default function App() {
  const renderName = ({ item }) => {
    return <Text style={styles.name}>{item.name}</Text>;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Welcome to the Names App</Text>
      </ScrollView>
      <FlatList
        data={namesAsObject}
        renderItem={renderName}
        keyExtractor={(item) => item.name}
      />
      <ScrollView>
        <Text style={styles.title}>This is a footer</Text>
      </ScrollView>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView>
  //     <ScrollView contentContainerStyle={styles.container}>
  //       {names.map((name) => (
  //         <Text>{name}</Text>
  //       ))}
  //       <StatusBar style="auto" />
  //     </ScrollView>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    alignSelf: "center",
    width: "95%",
    textAlign: "center",
    backgroundColor: "cyan",
    marginBottom: 15,
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 24,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "bold",
    width: 250,
    alignSelf: "center",
  },
});
