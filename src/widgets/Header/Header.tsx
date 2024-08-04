import css from './Header.module.scss';
import { Logo, Search } from '@/assets';
import { Input } from '@/components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IconButton } from '@mui/material';
import { useGetInfoUser } from '@/hooks';
import { userInfoStore } from '@/store';

export const Header = () => {
  const [search, setSearch] = useState('');

  const { getUserInfoByName } = useGetInfoUser();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userInfoStore.set.setPage(1);
    userInfoStore.set.repositories([]);
    getUserInfoByName(search);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className={css.container} onSubmit={handleSubmitForm}>
      <Logo />

      <Input
        className={css.input}
        value={search}
        onChange={handleChangeSearch}
        placeholder="Enter GitHub username"
        startAdornment={
          <IconButton type="submit">
            <Search />
          </IconButton>
        }
      />
    </form>
  );
};
