import { useMutation } from 'react-query';
import { IUser } from '@/types';
import { userInfoStore } from '@/store';
import { githubApi } from '@/api';
import { useEffect } from 'react';
import { useGetRepositoryUser } from '@hooks/useGetRepositoryUser.ts';

export const useGetInfoUser = () => {
  const { mutate: getUserInfoByName, status: statusUserInfoByName } =
    useMutation({
      mutationKey: ['UserByNickName'],

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

        userInfoStore.set.setUser(mappingUser);
      },

      onError: () => {
        userInfoStore.set.setUser(null);
      },

      mutationFn: (nickName: string) => {
        return githubApi.getUserByNickName(nickName);
      },
    });

  useGetRepositoryUser();

  useEffect(() => {
    userInfoStore.set.setStatusUserInfoByName(statusUserInfoByName);
  }, [statusUserInfoByName]);

  return { getUserInfoByName };
};
