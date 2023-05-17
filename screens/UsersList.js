import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { database } from '../database/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const collectionRef = collection(database, 'usuarios')
    const q = query(collectionRef, orderBy('name','desc'))

    const unsuscribe = onSnapshot(q, querySnapshot=>{
      setUsers(
        querySnapshot.docs.map(doc =>({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone:doc.data().phone
        }))
      )
    })  
    return unsuscribe
  }, [])
  

  const renderUserItem = ({ item }) => {
    return (
      <View style={styles.cell}>
        <Usuarios {...item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cell: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
export default UsersList