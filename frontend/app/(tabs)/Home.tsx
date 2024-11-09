import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  // Animated values for scale and opacity
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start animation when component mounts
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim, opacityAnim]);

  const handleExplorePress = () => {
    // Placeholder for button press action
    console.log("Explore button pressed");
    navigation.navigate('Explore')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.greeting} numberOfLines={1}>
        Welcome to HealthMate
      </Text>

      {/* User Description */}
      <Text style={styles.info}>
        Explore personalized insights and track your wellness journey effortlessly.
      </Text>

      {/* Animated Profile Image */}
      <View style={styles.profileContainer}>
        <Animated.Image
          style={[
            styles.avatar,
            {
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            },
          ]}
          source={require('@/assets/images/image2.jpeg')}
        />
      </View>

      {/* Explore Button */}
      <TouchableOpacity style={styles.exploreButton} onPress={handleExplorePress}>
        <Text style={styles.exploreButtonText}>Explore</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: '#f4f7fc', // Soft, light background
    alignItems: 'center', // Center content horizontally
    justifyContent: 'flex-start', // Align at the top
  },
  greeting: {
    fontSize: 22, // Larger font size
    fontWeight: '700',
    color: '#2D3A3F', // Deep greyish blue
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  info: {
    fontSize: 14,
    color: '#4A4A4A',
    marginHorizontal: 30,
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 15,
  },
  avatar: {
    width: 220, // Reduced size for a more balanced design
    height: 220,
    borderRadius: 100, // Full circular shape
    borderWidth: 5,
    borderColor: '#000', // Bright cyan border for a sleek touch
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  exploreButton: {
    backgroundColor: '#000', // Cyan background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, // Rounded button
    marginTop: 30,
    elevation: 5, // Shadow for depth
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Home;