import { FC } from 'react';
import css from './UserInfo.module.scss';
import { Avatar, Box, Typography } from '@mui/material';
import { Link } from '@/hoc';
import { User, Users } from '@/assets';

interface IUserInfoProps {
  avatarPath: string;
  userName: string;
  nickName: string;
  nickNameLink: string;
  followers: number;
  following: number;
}

export const UserInfo: FC<IUserInfoProps> = ({
  avatarPath,
  userName,
  nickName,
  nickNameLink,
  followers,
  following,
}) => {
  return (
    <div className={css.container}>
      <Avatar
        src={avatarPath}
        alt="User Avatar"
        sx={{ width: 280, height: 280 }}
      />

      <Box marginTop="28px">
        <Typography variant="h2" marginBottom="12px">
          {userName || '-'}
        </Typography>

        <Link href={nickNameLink}>
          <Typography variant="h4">{nickName || '-'}</Typography>
        </Link>

        <div className={css.subscriptions}>
          <div>
            <Users />
            <Typography variant="body1">{followers} followers</Typography>
          </div>

          <div>
            <User />
            <Typography variant="body1">{following} following</Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};
