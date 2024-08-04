import { IUserRepository } from '@/types';
import { userInfoStore } from '@/store';
import { githubApi } from '@/api';
import { MAX_PEAR_PAGE } from '@/constants';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const useGetRepositoryUser = () => {
  const user = userInfoStore.use.user();
  const page = userInfoStore.use.page();

  const { status: statusUserRepository } = useQuery({
    queryKey: ['getUserRepository', user?.login, page],
    enabled: !!user?.login,
    keepPreviousData: true,
    staleTime: 5000,

    onSuccess: (repositories: IUserRepository[]) => {
      const mappingRepositories: IUserRepository[] = repositories.map(
        repository => ({
          name: repository.name,
          description: repository.description,
          html_url: repository.description,
        }),
      );

      userInfoStore.set.setRepositories(mappingRepositories);
    },

    onError: () => {
      userInfoStore.set.repositories([]);
    },

    queryFn: () => {
      return githubApi.getUserRepositoryByNickName({
        nickName: user!.login,
        page,
        perPage: MAX_PEAR_PAGE,
      });
    },
  });

  useEffect(() => {
    userInfoStore.set.setStatusUserRepository(statusUserRepository);
  }, [statusUserRepository]);
};
