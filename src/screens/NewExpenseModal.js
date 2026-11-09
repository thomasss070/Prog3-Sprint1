// src/screens/NewExpenseModal.js
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, Alert,
  KeyboardAvoidingView, ScrollView, Platform,
} from 'react-native';

export default function NewExpenseModal({ navigation }) {
  const [nombreGasto, setNombreGasto] = useState('');
  const [monto, setMontoGasto] = useState('');
  const [categoria, setCategoriaGasto] = useState('');

  const handleGuardar = () => {
    console.log('Gasto guardado:', { nombreGasto, monto, categoria });
    Alert.alert(
      'Gasto guardado',
      `Nombre: ${nombreGasto}\nMonto: ${monto}\nCategoría: ${categoria}`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.headerTitle}>Registrar Nuevo Gasto</Text>

        <Text style={styles.label}>Nombre del Gasto:</Text>
        <TextInput
          style={styles.input}
          value={nombreGasto}
          onChangeText={setNombreGasto}
          placeholder="Ingrese el nombre del gasto"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Monto:</Text>
        <TextInput
          style={styles.input}
          value={monto}
          onChangeText={setMontoGasto}
          placeholder="Ingrese el monto"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoría:</Text>
        <TextInput
          style={styles.input}
          value={categoria}
          onChangeText={setCategoriaGasto}
          placeholder="Ingrese la categoría"
          placeholderTextColor="#999"
        />

        <View style={styles.buttonContainer}>
          <Button title="Guardar Gasto" onPress={handleGuardar} color="#007AFF" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    marginTop: 10,
  },
});