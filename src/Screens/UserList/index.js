import { BUILDER_KEYS } from '@babel/types';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserItem from '../../Components/UserItem';
import { getHotels } from '../../Services/UserService';

import styles from './styles';

const UserList = ({route}) => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getHotels().then(response => {      
          setIsLoading(false);
          setUsers(response.data);
      }).catch(console.error);
    });

    getHotels().then(response => {      
        setIsLoading(false);
        setUsers(response.data);
    }).catch(console.error);
  }, []) // SOMENTE NO PRIMEIRO RENDER

  return (
    <>
      <View style={(isLoading) ? styles.isLoadingContainer : null}>
        <SafeAreaView>
          <FlatList
            data={users}
            renderItem={({ item }) => <UserItem data={item} />}
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
