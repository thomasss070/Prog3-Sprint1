import React, {useState} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('Home');

  if (pantallaActual === 'Expenses') {
    return <ExpensesScreen onVolver={() => setPantallaActual('Home')} />;
  }

  return <HomeScreen onNavegarAGastos={() => setPantallaActual('Expenses')} />;
}
