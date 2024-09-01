import React from 'react';
import { View } from 'react-native';
import { Canvas, Circle, RadialGradient, vec } from '@shopify/react-native-skia';

const TransformCircleToBall = () => {
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Circle cx={150} cy={150} r={50}>
          <RadialGradient
            c={vec(150, 150)} // Center of the gradient
            r={50} // Radius of the gradient
            colors={['#4f9aff', '#1f6dbb']}
          />
        </Circle>
      </Canvas>
    </View>
  );
};

export default TransformCircleToBall;
