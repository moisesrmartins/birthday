import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    marginVertical: 2,
  },

  subtitle: {
    fontSize: 14,
  },
});

const currentYear = new Date().getFullYear();
console.log(currentYear);

export default styles;
