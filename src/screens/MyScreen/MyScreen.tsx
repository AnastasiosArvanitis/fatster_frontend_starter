import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsersRequest, fetchUserByIdRequest } from '../../store/actions/';
import { IRootState } from "../../store";

interface MyScreenProps {
  //proData: ProModel; TO DO MODEL
}

const MyScreen: FC<MyScreenProps> = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchAllUsersRequest());
    dispatch(fetchUserByIdRequest());
  },[]);

  const users = useSelector((state: IRootState) => state.users.users);
  const oneUser = useSelector((state: IRootState) => state.users.user);
  const error = useSelector((state: IRootState) => state.users.error);
  const loading = useSelector((state: IRootState) => state.users.loading);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Results
      </Text>
      <View>
        {loading ? <Text>loading......</Text> : null}
        {error ? <Text>{error}</Text> : null}
        {users?.length ? users.map( user => {
          return <View key={user.id}><Text key={user.id} style={styles.text}>{user.name}</Text></View>
        }) : <Text>'no users found'</Text>}
        {oneUser ? <Text>One user: {oneUser.name}</Text> : null}
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
