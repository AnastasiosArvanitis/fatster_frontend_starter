import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsersRequest } from '../../store/actions/';

interface MyScreenProps {
  //proData: ProModel; TO DO MODEL
}

const MyScreen: FC<MyScreenProps> = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchAllUsersRequest());
  });

  const users = useSelector(state => state.users.users);
  const error = useSelector(state => state.users.error);


  console.log(`Users : ${users}`);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Results
      </Text>
      <Text style={styles.text}>
        {error ? error : null}
        {users ? users.id : 'no users'}
      </Text>
    </View>
  );
}

export default MyScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor: '#ffffff'
  },
  text: {
    color: '#F00',
  }
});
