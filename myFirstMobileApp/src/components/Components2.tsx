import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';

 type Props = {
    name?: string;
 }

 const Component2: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>
                 Hello <Text style={{color: 'red'}}>{props.name}</Text>. Greetings from React
            </Text>
        </View>
    );
}

 const styles = StyleSheet.create({
 text:{
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center'
   } 
});

Component2.defaultProps = {
    name: "Timi"
}
   
   export default Component2;