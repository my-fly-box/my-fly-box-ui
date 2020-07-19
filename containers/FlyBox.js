import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Fly from '../components/Fly';

const TestFlies = [
    {
        id: 1,
        name: "Parachute Adams",
        size: 18,
        color: "tan",
        category: "dry",
        amount: 2,
        isFavorite: false,
        user_id: 1,
        created_at: "07/18/2020",
        updated_at: null
    },
    {
        id: 2,
        name: "Copper John",
        size: 20,
        color: "copper",
        category: "midge",
        amount: 1,
        isFavorite: false,
        user_id: 1,
        created_at: "07/19/2020",
        updated_at: null
    },
    {
        id: 1,
        name: "Zebra Midge",
        size: 22,
        color: "red",
        category: "midge",
        amount: 3,
        isFavorite: false,
        user_id: 1,
        created_at: "07/17/2020",
        updated_at: null
    }
]

const FlatListItemSeparator = () => {
    return (
        <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B"}} />
    )
}

const ListEmptyView = () => {
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Your fly box is empty.</Text>
        </View>
    )
}


export default function FlyBox({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Fly Name</Text>
                <Text>Fly Type</Text>
                <Text>Size</Text>
                <Text>Edit</Text>
            </View>
            <FlatList
                style={styles.fly}
                ItemSeparatorComponent={FlatListItemSeparator} 
                data={TestFlies}
                renderItem={({item}) => 
                    <Fly fly={item} navigation={navigation} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fly: {
        height: 44,
        width: "100%",
      },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: 10,
        borderBottomColor: "#2A9D8F",
        borderBottomWidth: 2
    }
  });