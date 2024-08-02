import css from './Header.module.scss';
import { Logo, Search } from '@/assets';
import { Input } from '@/components';

export const Header = () => {
  return (
    <div className={css.container}>
      <Logo />

      <Input
        placeholder="Enter GitHub username"
        startAdornment={<Search />}
        className={css.input}
      />
    </div>
  );
};
