import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, List } from 'react-native-paper';

import styles from './styles';

const UserItem = ({data}) => {

    const navigation = useNavigation();
    return (
        <>
            <TouchableHighlight onPress={() => navigation.navigate('Welcome', {id: data.id, name:data.name, description:data.hotelResume})}>
                <List.Item
                    title={data.name}
                    description={data.origin}
                    left={props => <Text {...props} style={styles.id}>{data.id}</Text>}
                />
            </TouchableHighlight>
        </>
    )

}

export default UserItem;