import React from 'react';
import { View } from 'react-native';
import { Canvas, Circle, Paint } from '@shopify/react-native-skia';

const BasicSkiaCircle = () => {
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Circle cx={150} cy={150} r={50} color="blue" />
      </Canvas>
    </View>
  );
};

export default BasicSkiaCircle;

