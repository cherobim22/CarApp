import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { createHotel, deleteHotel, updateHotel } from '../../Services/CarService';


import styles from './styles';

const Welcome = ({route, navigation}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [car, setCar] = useState([]);

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
            setCar(data)
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

    const handleUpdateCar = async () => {
        const res = await updateHotel(car.id, name, description)
        setTimeout(() => {
            navigation.navigate('UserList', {reload:true})
        }, 2000)
    }
    const handleDeleteCar = async () => {
        const res = await deleteHotel(car.id)
        setTimeout(() => {
            navigation.navigate('CarList', {reload:true})
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
                <TextInput   defaultValue={hotel?.description} style={styles.input} placeholder='Turbo, 4x4, sedan .... .. ' onChangeText={ updateDescription }/>

                {hotel.length == 0 ? 
                    <Button mode="contained" onPress={sendUser} style={styles.button} >
                        New Car
                    </Button>
                :
                    <>
                        <Button mode="contained" onPress={handleUpdateCar} style={styles.button} >
                            Update Car
                        </Button>
                        <Button mode="contained" onPress={handleDeleteCar} style={styles.button} >
                         Delete Car
                        </Button>
                    </>
                }
             
            </View>
        </>
    )

}

export default Welcome;