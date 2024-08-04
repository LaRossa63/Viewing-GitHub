export interface IUser {
  name: string;
  html_url: string;
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  public_repos: number;
}

export interface IUserRepositoryParams {
  nickName: string;
  page: number;
  perPage: number;
}

export interface IUserRepository {
  name: string;
  description: string;
  html_url: string;
}
