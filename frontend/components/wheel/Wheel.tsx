import { Platform, Text } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export default function Wheel() {
  if (Platform.OS === 'web') {
    return (
      <WithSkiaWeb
        getComponent={() => import('./WheelSvg')}
        fallback={<Text>Loading Wheel...</Text>}
      />
    );
  }
}
