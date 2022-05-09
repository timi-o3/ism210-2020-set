 /** Here we illustrate useEffect and fetching remote data */
 import React, {useState, useEffect} from 'react';
 import { View, Text } from 'react-native';
import Component5ShowUser from './components5ShowUser';
 
 type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string
        geo: {
            lat: number,
            lng: number,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
 }

 const component5: React.FC = () => {
     //const [state, setstate] = usestate(initialstate) ;
     const [user, setUser] = useState<User | null>(null);

     const fetchData = async () =>{
         try {
             let response = await fetch('https://jsonplaceholder.typicode.com/users/1' );
             let data = await response.json()
             setUser(data);
         } catch (error) {
             console.log(error)
             setUser(null);
         }
     };

     useEffect(() =>{
         fetchData();
     }, []); // the second parameter [] enusres the use effect only runs once.

     //conditionally show user if not defined 
     const showUser = () => {
         if (user!==null){
             return <Component5ShowUser user={user} />
         }
         else {
             return <Text>No user to display here</Text>;
         }
     }
     return (
         <View>
             <Text>Greetings from component5.</Text>
             <View>
                 {showUser()}
             </View>
         </View>
     )
}
 export default component5;