import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { List, OutputError } from '@/components';
import { Repository } from '@/assets';

interface IRepositoriesProps {}

const repositories = [
  {
    title: 'Маргарита Мясникова',
    titleLink: 'et nulla nostrud nulla non voluptate cupidatat sunt incididunt',
    description:
      'aliquip minim nostrud reprehenderit consequat in adipisicing aliquip ipsum consectetur aliquip ea est',
  },
  {
    title: 'Дмитрий Буров',
    titleLink:
      'aliquip reprehenderit excepteur eu irure ullamco proident id adipisicing',
    description:
      'excepteur ad reprehenderit veniam enim sit consectetur exercitation aliqua in reprehenderit dolor non sunt magna eu quis',
  },
  {
    title: 'Анжела Турова',
    titleLink: 'ad labore ea culpa et cupidatat labore labore Lorem eu',
    description:
      'est amet anim ea dolore officia nisi veniam mollit id minim ut irure nostrud reprehenderit',
  },
  {
    title: 'Валерия Королева',
    titleLink: 'esse magna sint velit ex in',
    description:
      'aute voluptate eiusmod eu nostrud non dolore ipsum officia excepteur amet amet sunt duis culpa',
  },
  {
    title: 'Зоя Киселева',
    titleLink:
      'ullamco sunt adipisicing ex consequat sunt laborum magna fugiat velit',
    description:
      'esse nulla dolore irure laborum eu commodo ad adipisicing sint nostrud minim adipisicing',
  },
  {
    title: 'Елена Зиновьева',
    titleLink: 'sint laboris aute velit ullamco culpa laboris cillum veniam',
    description:
      'et veniam nostrud sit excepteur deserunt quis magna fugiat qui ad magna est Lorem ea ut dolor anim id qui',
  },
  {
    title: 'Александр Симонов',
    titleLink: 'culpa duis id ipsum deserunt eiusmod',
    description:
      'non amet sint deserunt ullamco dolor eu occaecat ea sit laboris exercitation laborum',
  },
  {
    title: 'Раиса Артемьева',
    titleLink: 'anim est sit ad cupidatat ipsum',
    description:
      'veniam duis quis amet pariatur duis aliquip ipsum cupidatat ut pariatur pariatur esse velit culpa elit',
  },
  {
    title: 'Ангелина Бобылева',
    titleLink: 'qui adipisicing ad officia laboris ad',
    description:
      'reprehenderit nostrud aliquip in quis amet elit non aute fugiat',
  },
  {
    title: 'Алла Яковлева',
    titleLink:
      'laboris culpa consectetur ullamco do esse occaecat eu aute sunt',
    description:
      'ad exercitation culpa dolor occaecat exercitation commodo et sunt mollit deserunt mollit excepteur voluptate mollit',
  },
];

export const Repositories: FC<IRepositoriesProps> = () => {
  if (!repositories.length) {
    return (
      <OutputError icon={<Repository />} text="Repository list is empty" />
    );
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1">Repositories ({repositories.length})</Typography>

      <List list={repositories} />
    </Box>
  );
};
