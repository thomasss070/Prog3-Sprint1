import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORY_STYLES = {
  Comida: { icon: 'cart', color: '#4CAF50' },
  Transporte: { icon: 'car', color: '#FF9800' },
  Servicios: { icon: 'wifi', color: '#2196F3' },
};

export default function ExpenseItem({ description, amount, category }) {
  const { icon, color } = CATEGORY_STYLES[category] || { icon: 'pricetag', color: '#999' };

  return (
    <View style={styles.row}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={styles.description}>{description}</Text>
      <Text style={[styles.amount, { color }]}>${amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  description: { flex: 1, fontSize: 16, marginLeft: 12 },
  amount: { fontSize: 16, fontWeight: '600' },
});