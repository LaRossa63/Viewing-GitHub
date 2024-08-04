import { Box, Typography } from '@mui/material';
import { List, OutputError } from '@/components';
import { Repository } from '@/assets';
import { userInfoStore } from '@/store';

export const Repositories = () => {
  const user = userInfoStore.use.user();
  const repositories = userInfoStore.use.repositories();

  if (!user) {
    return null;
  }

  if (user.login && !user.public_repos) {
    return (
      <OutputError icon={<Repository />} text="Repository list is empty" />
    );
  }

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Typography variant="h1">Repositories ({user.public_repos})</Typography>

      <List list={repositories} countItem={user.public_repos} />
    </Box>
  );
};
