import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Explore = () => {
  const [reminders, setReminders] = useState([]); // State to store the reminders

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await fetch('http://192.168.103.221:8088/get-reminders');
        const data = await response.json();
        setReminders(data);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };
    fetchReminders();
  }, []);

  const renderReminder = ({ item }) => (
    
    <View style={styles.reminderItem}>
      <Text style={styles.Title}>{item.title}</Text>
      <Text>{item.Description}</Text>
      <Text>{item.Date}</Text>
      <Text>{item.Time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reminders</Text>
      <FlatList
        data={reminders}
        renderItem={renderReminder}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())} // Handle missing id
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reminderItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Explore;
