export type AuthentifiedUser = {
  username: string;
  role: UserRole;
};

export enum UserRole {
  'ADMIN',
  'MANAGER',
}
