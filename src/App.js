import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation('common');

  return <h1>{t('welcome.title')}</h1>
}

export default App;
