import { Header, Repositories, UserInfo } from '@/widgets';
import css from './Main.module.scss';

export const Main = () => {
  return (
    <>
      <Header />

      <div className={css.container}>
        <UserInfo
          avatarPath=""
          userName="Maxim"
          nickName="MaximLimk"
          nickNameLink="12"
          followers={300}
          following={300}
        />

        <Repositories />
      </div>
    </>
  );
};
