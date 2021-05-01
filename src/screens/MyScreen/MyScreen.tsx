import React, { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

interface MyScreenProps {
  //proData: ProModel; TO DO MODEL
}

const MyScreen: FC<MyScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>MyScreen</Text>
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
});
