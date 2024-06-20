import WheelCreationForm from '@/components/WheelCreationForm';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Spin the Wheel',
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <WheelCreationForm />
      </View>
    </>
  );
}
