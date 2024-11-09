import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const ReminderList = () => {
  const [reminder, setReminders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await fetch('http://192.168.103.221:8088/get-Reminders');
        const data = await response.json();
        setReminders(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching reminders:', error);
        setError('Failed to fetch reminders');
        setIsLoading(false);
      }
    };

    fetchReminders();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={reminders}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.date}</Text>
              <Text>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};