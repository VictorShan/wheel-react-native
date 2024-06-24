import { Canvas, Circle, useCanvasRef } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';

export default function WheelSvg({
  width = 300,
  height = 300,
}: {
  width: number;
  height: number;
}) {
  const canvasRef = useCanvasRef();

  return (
    <Canvas style={{ width, height }} ref={canvasRef}>
      <Circle
        cx={width / 2}
        cy={height / 2}
        r={Math.min(width, height) / 2}
        color="red"
      />
    </Canvas>
  );
}
