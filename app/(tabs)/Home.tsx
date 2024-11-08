import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Welcome Back!</Text>
      
      {/* User Profile / Avatar */}
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://placekitten.com/200/200' }} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      
      {/* Main Features */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureBox}>
          <Text style={styles.featureText}>Feature 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureBox}>
          <Text style={styles.featureText}>Feature 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureBox}>
          <Text style={styles.featureText}>Feature 3</Text>
        </TouchableOpacity>
      </View>
      
      {/* Recent Activity */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Completed Task A</Text>
          <Text style={styles.activityTime}>1 hour ago</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Started Task B</Text>
          <Text style={styles.activityTime}>2 days ago</Text>
        </View>
      </View>
      
      {/* Notifications */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Text style={styles.notificationText}>You have 3 new updates</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f4f8',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  featureBox: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  featureText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  activityText: {
    fontSize: 16,
  },
  activityTime: {
    fontSize: 14,
    color: '#888',
  },
  notificationText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Home;
