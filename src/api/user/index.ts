import { apiClient } from '../apiClient';

export interface ShowUsersProps {
  UserCode: string;
  Name: string;
  Email: string;
  Active: boolean;
  Permission?: number[];
  Password?: string;
  ConfirmPassword?: string;
}

export const onAllUser = () => apiClient.get<ShowUsersProps[]>('/list/users');

export const onUserCreate = (item: ShowUsersProps) => apiClient.post<ShowUsersProps>('/list/users', {
  userCode: item.UserCode,
  name: item.Name,
  email: item.Email,
  active: item.Active,
  password: item.Password,
  confirmPassword: item.ConfirmPassword,
});

export const onDeleteUser = (userId: number) => apiClient.delete(`/list/users/${userId}`).then(r => true);
