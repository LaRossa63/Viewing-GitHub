import { FullUserInfo, Header } from '@/widgets';
import css from './Main.module.scss';

export const Main = () => {
  return (
    <>
      <Header />

      <div className={css.container}>
        <FullUserInfo />
      </div>
    </>
  );
};
