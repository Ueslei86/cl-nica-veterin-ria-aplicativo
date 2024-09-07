import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// importação das telas
import HomeScreen from './src/pages/HomeScreen';
import NewScreen from './src/pages/NewScreen';
import { paleta } from './src/styles/paleta';

const Tab = createBottomTabNavigator();

let data = [
  {
    id: 1,
    especie: 'Cavalo',
    nome: 'Pégazo',
    raca: 'SRD',
    porteAnimal: 'Grande',
    corPredominante: 'caramelo',
    observacao: 'Consultas preventivas '
  },
  {
    id: 2,
    especie: 'Gato',
    nome: 'Miguel',
    raca: 'SRD',
    porteAnimal: 'pequeno',
    corPredominante: 'cinza',
    observacao: 'Exames laboratoriais .'
  },
  {
    id: 3,
    especie: 'Cachorro',
    nome: 'Fred',
    raca: 'SRD',
    porteAnimal: 'Grande',
    corPredominante: 'preto e branco',
    observacao: 'Vacinação .'
  },
  
  {
    id: 4,
    especie: 'Gato',
    nome: 'Luiz Garcia',
    raca: 'Siamês',
    porteAnimal: 'Médio',
    corPredominante: 'marrom',
    observacao: 'Cirurgias de esterilização .'
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: paleta.cinza,
          tabBarActiveBackgroundColor: paleta.preto,
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="New" 
          component={NewScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='plus-circle' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}