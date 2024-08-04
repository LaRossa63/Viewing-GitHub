import { createStore } from 'zustand-x';
import { IUser, IUserRepository, Status } from '@/types';

interface IInitialState {
  user: IUser | null;
  repositories: IUserRepository[];
  statusUserInfoByName: Status;
  statusUserRepository: Status;
  page: number;
}

const initialState: IInitialState = {
  user: null,
  repositories: [],
  statusUserInfoByName: 'idle',
  statusUserRepository: 'idle',
  page: 1,
};

export const userInfoStore = createStore('user_info_store')(initialState, {
  devtools: { enabled: true },
}).extendActions(set => ({
  setUser: (user: IInitialState['user']) => {
    set.user(user);
  },

  setRepositories: (repositories: IInitialState['repositories']) => {
    set.repositories(repositories);
  },

  setStatusUserInfoByName: (status: IInitialState['statusUserInfoByName']) => {
    set.statusUserInfoByName(status);
  },

  setPage: (page: IInitialState['page']) => {
    set.page(page);
  },

  setStatusUserRepository: (status: IInitialState['statusUserInfoByName']) => {
    set.statusUserRepository(status);
  },
}));
