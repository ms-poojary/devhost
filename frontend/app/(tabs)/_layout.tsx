// tab/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { display: 'none' },
        tabBarInactiveBackgroundColor: "#007BFF",
        tabBarActiveBackgroundColor: "#007BFF",
        tabBarInactiveTintColor: Colors.secondary.lightgrey,
        tabBarActiveTintColor: Colors.secondary.gold1,
      }}
    >
    
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        options={{
          tabBarIcon: ({ color, size }) => (
<AntDesign name="plussquareo" size={24} color={color} />          ),
        }}
      />
        <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
<AntDesign name="user" size={24} color={color} />          ),
        }}
      />
        <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ color, size }) => (
<Ionicons name="search" size={24} color={color} />          ),
        }}
      />
      
    </Tabs>
    
  );
}