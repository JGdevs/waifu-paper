import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main.jsx';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query';

export default function App() {

  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient}>
      <Main/>
    </QueryClientProvider>

  )
}