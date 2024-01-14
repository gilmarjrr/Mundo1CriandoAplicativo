import react from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Comp1(props){
    return(
        <Text style = {estilos.txt2} >CFB Cursos - Curso de {props.curso}</Text>
    )
}

const estilos = StyleSheet.create({
    txt1:{
        color:'#f00',
        fontSize:20,
    },
    txt2:{
        color:'#00f',
        fontSize:15
    }
})