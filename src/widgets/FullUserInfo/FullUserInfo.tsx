import css from './FullUserInfo.module.scss';
import { Repositories, UserInfo } from '@/widgets';
import { OutputError } from '@/components';
import { Search, User } from '@/assets';
import { userInfoStore } from '@/store';

export const FullUserInfo = () => {
  const statusUserInfoByName = userInfoStore.use.statusUserInfoByName();

  if (statusUserInfoByName === 'idle') {
    return (
      <OutputError
        icon={<Search />}
        text="Start with searching a GitHub user"
      />
    );
  }

  if (statusUserInfoByName === 'error') {
    return <OutputError icon={<User />} text="User not found" />;
  }

  return (
    <div className={css.container}>
      <UserInfo />

      <Repositories />
    </div>
  );
};
