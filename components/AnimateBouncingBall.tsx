import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  Canvas,
  Circle,
  RadialGradient,
  vec,
  Group,
} from '@shopify/react-native-skia';

const AnimateBouncingBall = () => {
  const [yPos, setYPos] = useState(150);
  const [scaleY, setScaleY] = useState(1);

  useEffect(() => {
    const bounceAnimation = () => {
      setYPos(400);
      setTimeout(() => setYPos(150), 1000);
    };

    const scaleAnimation = () => {
      setScaleY(0.8);
      setTimeout(() => setScaleY(1), 500);
    };

    const interval = setInterval(() => {
      bounceAnimation();
      scaleAnimation();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Group
          transform={[
            { translateX: 150 },
            { translateY: yPos },
            { scaleY: scaleY },
          ]}
        >
          <Circle cx={0} cy={0} r={50}>
            <RadialGradient
              c={vec(0, 0)}
              r={50}
              colors={['#4f9aff', '#1f6dbb']}
            />
          </Circle>
        </Group>
      </Canvas>
    </View>
  );
};

export default AnimateBouncingBall;
