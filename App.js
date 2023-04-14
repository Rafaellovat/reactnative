import { StyleSheet, View } from 'react-native';
import Filme from './src/components/Filme';

const listaFilmes = [
  {
    titulo: "Super Mario Bros",
    sinopse: "Mario é um encanador junto com seu irmão Luigi...",
    urlPoster: "https://sm.ign.com/t/ign_br/blogroll/t/the-super-/the-super-mario-bros-movie-poster-features-all-of-our-favori_f7mq.1200.jpg",
  },
  {
    titulo: "John Wick 4: Baba Yaga",
    sinopse: "Com o preço por sua cabeça cada vez maior...",
    urlPoster: "https://www.claquete.com.br/fotos/filmes/poster/12654_medio.jpg",
  },
  {
    titulo: "Suzume",
    sinopse: "Suzume conta a história duma adolescente...",
    urlPoster: "https://ovicio.com.br/wp-content/uploads/2022/10/20221028-ovicio-suzume.jpeg",
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      {listaFilmes.map(filme => <Filme filme={filme} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',   
    fontSize: '20px',
    fontWeight: 'bold',
  },
  img: {
    width: 50,
    height: 50,
  }
});
