import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { createHotel, deleteHotel, updateHotel } from '../../Services/UserService';


import styles from './styles';

const Welcome = ({route, navigation}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [hotel, setHotel] = useState([]);

    const updateName = (value) => {
        setName(value);
    }

    const updateDescription = (value) => {
        setDescription(value);        
    }

    useEffect(() => {
     
        const data = route.params
     
        if(data.id){
            setName(data.name)
            setDescription(data.description)
            setHotel(data)
        }else{
            console.log('teste')
        }
    },[])

    const sendUser = async (e) => {
        const resp = await createHotel(name, description)
        setTimeout(() => {
            navigation.navigate('UserList', {reload:true})
        }, 2000)
    }

    const handleUpdateHotel = async () => {
        const res = await updateHotel(hotel.id, name, description)
        setTimeout(() => {
            navigation.navigate('UserList', {reload:true})
        }, 2000)
    }
    const handleDeleteHotel = async () => {
        console.log('delete hjotel')
        const res = await deleteHotel(hotel.id)
        setTimeout(() => {
            navigation.navigate('UserList', {reload:true})
        }, 2000)
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Nome:</Text>
                <TextInput 
                style={styles.input} 
                placeholder='Digite um nome'
                onChangeText={ updateName } 
                defaultValue={hotel?.name}/>

                <Text>Descrição:</Text>
                <TextInput   defaultValue={hotel?.description} style={styles.input} placeholder='televisão, ar condicionado, cafe da manha ....' onChangeText={ updateDescription }/>

                {hotel.length == 0 ? 
                    <Button mode="contained" onPress={sendUser} style={styles.button} >
                        Novo Hotel
                    </Button>
                :
                    <>
                        <Button mode="contained" onPress={handleUpdateHotel} style={styles.button} >
                            Update Hotel
                        </Button>
                        <Button mode="contained" onPress={handleDeleteHotel} style={styles.button} >
                         Delete Hotel
                        </Button>
                    </>
                }
             
            </View>
        </>
    )

}

export default Welcome;