import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, List } from 'react-native-paper';

import styles from './styles';

const UserItem = ({data}) => {

    const navigation = useNavigation();
    return (
        <>
            <TouchableHighlight onPress={() => navigation.navigate('Welcome', {id: data._id, name:data.name, description:data.description})}>
                <List.Item
                    title={data.name}
                    description={data.description}
                    // left={props => <Text {...props} style={styles.id}></Text>}
                />
            </TouchableHighlight>
        </>
    )

}

export default UserItem;