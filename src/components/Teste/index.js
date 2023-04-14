import { Text, View } from "react-native";

import styles from "./styles";

function Teste({ texto, children }){
    return(
        <View style={styles.container}>
            { children }
            <Text style={styles.texto}>{texto}</Text>
        </View>
    )
}

export default Teste;