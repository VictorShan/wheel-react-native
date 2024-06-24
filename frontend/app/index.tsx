import WheelCreationForm from '@/components/WheelCreationForm';
import Wheel from '@/components/wheel/Wheel';
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
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Wheel />
        <WheelCreationForm />
      </View>
    </>
  );
}
