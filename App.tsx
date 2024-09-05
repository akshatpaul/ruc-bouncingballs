// Demo bouncingballs
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BasicSkiaCircle from './components/BouncingBallStep1';
// import TransformCircleToBall from './components/TransformCircleToBall';
// import AnimateBouncingBall from './components/AnimateBouncingBall';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BasicSkiaCircle />
      {/* <TransformCircleToBall /> */}
      {/* <AnimateBouncingBall /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

