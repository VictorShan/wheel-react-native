import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { Platform } from 'react-native';

export default function RootLayout() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    if (Platform.OS !== 'web') {
      onFetchUpdateAsync();
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen name="Spin the Wheel" />
    </Stack>
  );
}
