import React from 'react';
import { View, Text, FlatList } from 'react-native';
type User = {
 id: string, //this needs to be string for keyExtractor in FlatList not to complain
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
 lng: number
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
type Props = {
 users: User | any
}
const Component8ShowUsers: React.FC<Props> = (props) => {
    const showUser = () => {
      const user: User = props.users;
      try {
        if (user.id !== undefined) {
          return (
            <View>
              <Text>User data fetched from remote source:</Text>
              <Text>id: {user.id}</Text>
              <Text>name: {user.name}</Text>
              <Text>username: {user.username}</Text>
              <Text>email: {user.email}</Text>
              <Text>street address: {user.address.street}</Text>
              <Text>phone: {user.phone}</Text>
              <Text>website: {user.website}</Text>
              <Text>company name: {user.company.name}</Text>
            </View>
          );
        } else {
          return <Text>No user to display</Text>; //user is null or elements are undefined
        }
      } catch (error) {
        return <Text>Problem displaying user: ${error}</Text>;
      }
    };
  
    return <View>{showUser()}</View>;
  };
  Component8ShowUsers.defaultProps = {
    users: undefined,
  };
  export default Component8ShowUsers;