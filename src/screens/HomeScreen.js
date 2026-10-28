// src/screens/HomeScreen.js
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ onNavegarAGastos }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExpenseTracker</Text>
      <Text style={styles.subtitle}>¡Bienvenido/a!</Text>
      <Text style={styles.description}>
        Esta aplicación te permitirá registrar y administrar tus gastos diarios de forma sencilla.
      </Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Cargar Nuevo Gasto" 
          onPress={onNavegarAGastos} 
          color="#007AFF" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});