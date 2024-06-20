import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function WheelPage() {
  const localParams = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: `${localParams.wheel}` }} />
      <Text>Lobby {localParams.wheel}</Text>
    </SafeAreaView>
  );
}
