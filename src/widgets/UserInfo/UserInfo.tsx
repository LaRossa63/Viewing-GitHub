import css from './UserInfo.module.scss';
import { Avatar, Box, Typography } from '@mui/material';
import { Link } from '@/hoc';
import { User, Users } from '@/assets';
import { userInfoStore } from '@/store';

export const UserInfo = () => {
  const user = userInfoStore.use.user();

  if (!user) {
    return null;
  }

  return (
    <div className={css.container}>
      <Avatar
        src={user.avatar_url}
        alt="User Avatar"
        sx={{ width: 280, height: 280 }}
      />

      <Box marginTop="28px">
        <Typography variant="h2" marginBottom="12px">
          {user.name || '-'}
        </Typography>

        <Link href={user.html_url}>
          <Typography variant="h4">{user.login || '-'}</Typography>
        </Link>

        <div className={css.subscriptions}>
          <div>
            <Users />
            <Typography variant="body1">{user.followers} followers</Typography>
          </div>

          <div>
            <User />
            <Typography variant="body1">{user.following} following</Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};
