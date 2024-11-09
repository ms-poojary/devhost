import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/image2.jpeg')} // Your profile image
          style={styles.profilePicture}
        />
      </View>

      <View style={styles.profileHeader}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userBio}>Your Bio Goes Here</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => { console.log('Edit Profile clicked'); }}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { console.log('Settings clicked'); }}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { console.log('Logout clicked'); }}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center', // Center content vertically
  },
  profileContainer: {
    alignItems: 'center', // Center the profile image
    marginBottom: 20, // Add space between profile picture and text
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular profile picture
    borderWidth: 3, // Optional: Border around profile picture
    borderColor: '#007bff', // Blue border for emphasis
    marginBottom: 10, // Space between image and text
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userBio: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 20, // Add some padding to avoid text clipping
  },
  statsContainer: {
    marginBottom: 30,
  },
  statsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15, // Add space between buttons
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;