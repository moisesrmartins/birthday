import { useState } from "react";
import styles from "./styles";
import { View, Text } from "react-native";

function App() {
  const [name, setName] = useState("Digite seu nome, por favor!");
  const [valueInput, setValueInput] = useState("");

  const handle = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      setName(
        <View style={styles.centered}>
          <Text styles={styles.title}>{`🎂🎂🎂`}</Text>
          <Text styles={styles.title}>
            <b>{`FELIZ`}</b>
          </Text>
          <Text styles={styles.title}>
            <b>{`ANIVERSÁRIO`}</b>
          </Text>
          <Text styles={styles.title}>{`🎂🎂🎂`}</Text>

          <Text
            styles={styles.title}
          >{`!!!!! 🎉🎉🎉 Parabéns ${e.target.value} feliz aniversário 🎉🎉🎉 !!!!!`}</Text>
        </View>
      );
      setValueInput("");
    }
  };

  return (
    <div className="App">
      <View style={styles.centered}>
        <Text style={styles.subtitle}>
          <h1>{name}</h1>
        </Text>
        <Text style={styles.form}>
          <div
            className="Container"
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <form action="#">
              <input
                type="text"
                id="textName"
                className="txtName"
                onKeyUp={(e) => handle(e)}
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
            </form>
          </div>
        </Text>
      </View>
    </div>
  );
}

export default App;
