import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Comment from './components/Comment';
import database from './database';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = database.get('posts').query().fetch()
    setPosts(allPosts)
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{JSON.stringify(posts)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
