import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';

type Inputs = {
  lobbyName: string;
  description: string;
};

export default function WheelCreationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      lobbyName: '',
      description: '',
    },
  });
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    // Debugging
    console.log(data);
    // Check auth and that lobby is available
    // Go to the wheel page
    router.push(`/wheel/${data.lobbyName}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Wheel</Text>

      <Controller
        name="lobbyName"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Wheel Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      <Controller
        name="description"
        rules={{ maxLength: 140 }}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            numberOfLines={4}
            multiline
            style={styles.input}
          />
        )}
      />
      {errors.lobbyName && (
        <Text style={{ marginTop: 5, color: 'red' }}>
          Wheel Name is required
        </Text>
      )}
      <View style={{ marginTop: 10 }}>
        <Button title="Create Wheel" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    width: 250,
  },
});
