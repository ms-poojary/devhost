import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Add = () => {
  const navigation = useNavigation();

  // State to store reminder details
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Function to handle adding reminder
  const handleAddReminder = async () => {
  // ... (existing code)

  try {
    const response = await fetch('http://192.168.103.221:8088/add-Reminders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, date, time }),
    });

    if (response.ok) {
      Alert.alert('Success', 'Reminder added successfully');
      navigation.navigate('Home');

      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
    } else {
      const errorData = await response.text();
      console.error('Error response:', errorData);
      Alert.alert('Error', 'Failed to add reminder');
    }
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'Something went wrong');
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Reminder</Text>
      
      {/* Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Reminder Title"
        value={title}
        onChangeText={setTitle}
      />
      
      {/* Description Input */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      
      {/* Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        
        value={date}
        onChangeText={setDate}
      />
      
      {/* Time Input */}
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />

      {/* Add Button */}
      <Button title="Add Reminder" onPress={handleAddReminder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
});

export default Add;