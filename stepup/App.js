import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/navigation';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigation />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
