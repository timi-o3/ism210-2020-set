import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Component1 from './src/components/Components1';
import Component2 from './src/components/Components2'; 
import Component4 from './src/components/Components4';
import Component5 from './src/components/components5';
import Component6 from './src/components/component6';
import Component7 from './src/components/Component7';
import Component8 from './src/components/Component8';

//below is used to add separator to the components which can be shown in the code
const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Component1/>
      <Separator/>
      <Component2 name='Timi' />
      <Component2/>
      <Separator/>
      <Component4/>
      <Separator/>
      <Component5/>
      <Separator/>
      <Component6/>
      <Separator/>
      <Component7/>
      <Separator/>
      <Component8/>
    </View>
    </ScrollView>
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%'
  }
});

export default App;