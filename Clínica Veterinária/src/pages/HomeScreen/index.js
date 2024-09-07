import { 
  View, 
  Text, 
  FlatList,
} from 'react-native';
import { styles } from './style';
import Item from '../../components/Item';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clínica Veterinária</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <Item pet={item} especie={item.especie} raca={item.raca} nome={item.nome} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}