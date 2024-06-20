import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { Platform, Text, View } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitle: (props) => <HeaderTitle {...props} />,
        }}
      >
        <Stack.Screen name="Spin the Wheel" />
      </Stack>
    </ThemeProvider>
  );
}

function HeaderTitle({
  children,
  tintColor,
}: {
  children: string;
  tintColor?: string;
}) {
  document.title = children;
  return (
    <View
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text
        style={{
          color: tintColor,
          fontSize: 20,
          fontWeight: 'bold',
          marginRight: 10,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
