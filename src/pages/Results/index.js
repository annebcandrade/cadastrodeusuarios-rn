import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

export default function Results({ route }) {
    const { users: initialUsers } = route.params;
    const [users, setUsers] = useState(initialUsers);

  useEffect(() => {

    async function fetchUsers() {
      try {
        const response = await axios.get("https://api-register-node-users.vercel.app/users");
       
        if (response.data && Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error("Resposta da API não possui dados esperados:", response);
        }
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    }

    fetchUsers();
  }, []);


  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://api-register-node-users.vercel.app/users/${userId}`);

     
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      Alert.alert("Erro", "Erro ao excluir usuário. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Histórico de Cadastros:</Text>
      </Animatable.View>

      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item: user }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <Text style={styles.userPassword}>{user.password}</Text>
            <TouchableOpacity onPress={() => handleDeleteUser(user.id)}>
            <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>   
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    marginTop: '11%',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  userContainer: {
    fontSize: 18,
    alignItems: 'center',
    marginTop: '7%',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 16,
    color: '#fff',
  },
  userPassword: {
    fontSize: 16,
    color: '#fff',
  },
  deleteButton:{
    fontSize: 16,
    backgroundColor: '#fff',
  }
});

