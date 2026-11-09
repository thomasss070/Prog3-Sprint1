import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';

const EXPENSES = [
  { id: '1', description: 'Supermercado', amount: 25000, category: 'Comida' },
  { id: '2', description: 'Combustible', amount: 18000, category: 'Transporte' },
  { id: '3', description: 'Internet', amount: 32000, category: 'Servicios' },
];

export default function ExpensesScreen({ navigation }) {
  const total = EXPENSES.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis gastos</Text>

      <FlatList
        data={EXPENSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem
            description={item.description}
            amount={item.amount}
            category={item.category}
          />
        )}
        ListFooterComponent={
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>${total}</Text>
          </View>
        }
      />

      <Button
        title="Agregar gasto"
        onPress={() => navigation.navigate('NuevoGasto')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalAmount: { fontSize: 18, fontWeight: 'bold' },
});