import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ProjectsList(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Projects List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boldText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default ProjectsList;
