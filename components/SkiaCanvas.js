import React from 'react';
import { View } from 'react-native';
import { Canvas, Paint, Path } from '@shopify/react-native-skia';

const SkiaCanvas = () => {
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
      <Path path="M50 50 L150 50 L150 150 L50 150 Z" >
        <Paint color="red" />
      </Path>  
    <Path path="M200 200 L300 200 L300 300 L200 300 Z" >
        <Paint color="blue" />
    </Path>
      </Canvas>
    </View>
  );
};

export default SkiaCanvas;