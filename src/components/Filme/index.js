import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Filme(props){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.poster} source={{
                    uri: props.filme.urlPoster
                }}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>{props.filme.titulo}</Text>
                <Text style={styles.sinopes}>{props.filme.sinopse}</Text> 
                <Button style={styles.btnComprar} title="Comprar" />
            </View>
        </View>
    );
}