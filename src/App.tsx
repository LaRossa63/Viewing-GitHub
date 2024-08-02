import './App.scss';
import { AppProvider } from '@/providers';
import { Main } from '@/pages';

export const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};
