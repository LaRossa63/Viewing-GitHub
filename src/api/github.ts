import { Axios } from './config.ts';
import { IUser, IUserRepository, IUserRepositoryParams } from '@/types';

export const githubApi = {
  async getUserByNickName(nickName: string): Promise<IUser> {
    return Axios.get(`users/${nickName}`);
  },

  async getUserRepositoryByNickName({
    nickName,
    page,
    perPage,
  }: IUserRepositoryParams): Promise<IUserRepository[]> {
    return Axios.get(`users/${nickName}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
    });
  },
};
