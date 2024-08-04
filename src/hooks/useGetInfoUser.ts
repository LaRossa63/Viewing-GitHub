import { useMutation } from 'react-query';
import { IUser, IUserRepository, IUserRepositoryParams } from '@/types';
import { userInfoStore } from '@/store';
import { githubApi } from '@api/github.ts';
import { MAX_PEAR_PAGE } from '@/constants';
import { useEffect } from 'react';

export const useGetInfoUser = () => {
  const page = userInfoStore.use.page();

  const { mutate: getUserRepository, status: statusUserRepository } =
    useMutation({
      mutationKey: ['getUserRepository'],

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

      mutationFn: ({ nickName, page, perPage }: IUserRepositoryParams) => {
        return githubApi.getUserRepositoryByNickName({
          nickName,
          page,
          perPage,
        });
      },
    });

  const { mutate: getUserInfoByName, status: statusUserInfoByName } =
    useMutation({
      mutationKey: 'getUserByNickName',

      onSuccess: async (user: IUser) => {
        const mappingUser: IUser = {
          name: user.name,
          html_url: user.html_url,
          avatar_url: user.avatar_url,
          followers: user.followers,
          following: user.following,
          login: user.login,
          public_repos: user.public_repos,
        };

        const requestParams: IUserRepositoryParams = {
          nickName: user.login,
          page: 1,
          perPage: MAX_PEAR_PAGE,
        };

        getUserRepository(requestParams);

        userInfoStore.set.setUser(mappingUser);
      },

      onError: () => {
        userInfoStore.set.setUser(null);
      },

      mutationFn: (nickName: string) => {
        return githubApi.getUserByNickName(nickName);
      },
    });

  useEffect(() => {
    const user = userInfoStore.get.user();

    if (!user) {
      return;
    }

    const requestParams: IUserRepositoryParams = {
      nickName: user.login,
      page,
      perPage: MAX_PEAR_PAGE,
    };

    getUserRepository(requestParams);
  }, [getUserRepository, page]);

  useEffect(() => {
    userInfoStore.set.setStatusUserInfoByName(statusUserInfoByName);
  }, [statusUserInfoByName]);

  useEffect(() => {
    userInfoStore.set.setStatusUserRepository(statusUserRepository);
  }, [statusUserRepository]);

  return { getUserInfoByName, statusUserInfoByName, getUserRepository };
};
