import { StyleSheet, Text, View } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Text>My profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Profile;
