import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Button,
  FlatList,
  View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarItem from '../../Components/CarItem';
import { getCars } from '../../Services/CarService';

import styles from './styles';

const UserList = ({route}) => {
  const navigation = useNavigation();
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCars().then(response => {      
          setIsLoading(false);
          setCars(response.data);
      }).catch(console.error);
    });

    getCars().then(response => {      
        setIsLoading(false);
        setCars(response.data);
    }).catch(console.error);
  }, []) // SOMENTE NO PRIMEIRO RENDER

  return (
    <>
      <View style={(isLoading) ? styles.isLoadingContainer : null}>
        <SafeAreaView>
          <FlatList
            data={cars}
            renderItem={({ item }) => <CarItem data={item} />}
          />

        </SafeAreaView>
      </View>

         
      <Button 
        title="Criar novo"
        onPress={async () => {
          navigation.navigate('Welcome', {id: 0})
        }}
        />
      {isLoading && <ActivityIndicator style={styles.activityIndicator} animating={isLoading} /> }

    </>
  );
};

export default UserList;
