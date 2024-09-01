import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AnimateBouncingBall from './components/AnimateBouncingBall';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimateBouncingBall />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;




// AnimateBouncingBall demo 2
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import TransformCircleToBall from './components/TransformCircleToBall';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <TransformCircleToBall />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;


// Demo Step 1 bouncingballstep1
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import BasicSkiaCircle from './components/BouncingBallStep1';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <BasicSkiaCircle />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;



//  Demo blurred gradient
// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import BlurredGradientBackground from './components/BlurredGradientBackground'; // Ensure the correct path

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <BlurredGradientBackground />
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Welcome to my Sdkia App</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     color: '#fff',
//   },
// });

// export default App;


// Demo 1 
// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import GradientBackground from './components/GradientBackground'; // Ensure the correct path

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <GradientBackground />
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Welcome to my Skia App</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     color: '#fff',
//   },
// });

// export default App;


// basic Skia Example
// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import SkiaCanvas from './components/SkiaCanvas'; // Adjust the path if needed

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <SkiaCanvas />
//     </SafeAreaView>
//   );
// };

// export default App;
