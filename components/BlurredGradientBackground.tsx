import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

const BlurredGradientBackground = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255,127,127,0.8)', 'rgba(127,127,255,0.8)']}
        style={styles.background}
      />
      <BlurView
        style={styles.blurOverlay}
        blurType="regular"  // Change this to experiment with different blur effects
        blurAmount={100}  // Increased for a more noticeable effect
        reducedTransparencyFallbackColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default BlurredGradientBackground;

