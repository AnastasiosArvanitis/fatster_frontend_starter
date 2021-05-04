import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsersRequest } from '../../store/actions/';
import { IRootState } from "../../store";

interface MyScreenProps {
  //proData: ProModel; TO DO MODEL
}

const MyScreen: FC<MyScreenProps> = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchAllUsersRequest());
  });

  const users = useSelector((state: IRootState) => state.users.users);
  const error = useSelector((state: IRootState) => state.users.error);
  const loading = useSelector((state: IRootState) => state.users.loading);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Results
      </Text>
      <View>
        {error ? error : null}
        {users?.length ? users.map( user => {
          return <View><Text style={styles.text}>{user.name}</Text></View>
        }) : 'no users'}
      </View>
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
