import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MainPage } from './components/MainPage';
import { Header } from './components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header/>
        <MainPage/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    margin: 20,
  },
});
