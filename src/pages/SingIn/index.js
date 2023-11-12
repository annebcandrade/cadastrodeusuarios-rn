import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignUp() {
       
        if (!name || !email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
          }
          
        if (!email.includes('@')) {
          Alert.alert('Erro', 'Por favor, insira um email válido.');
          return;
        }
    
        if (password.length < 8) {
          Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
          return;
        }
    
        try {
          const response = await axios.post("https://api-register-node-users.vercel.app/users", {
            name,
            email,
            password,
          });
    
          navigation.navigate('Results', { users: response.data });
        } catch (error) {
          console.error("Erro ao cadastrar:", error);
          Alert.alert("Erro", "Erro ao cadastrar. Por favor, tente novamente.");
        }
      }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se:</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome:</Text>
                <TextInput
                    placeholder="Digite seu nome"
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Text style={styles.title}>Email:</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.title}>Senha: (Mínimo 8 caracteres)</Text>
                <TextInput
                    placeholder="Digite sua Senha"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})