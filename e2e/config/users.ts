export enum Users {
  EventManager = 'event-manager',
  Admin = 'admin'
}

export type User = {
  name: string;
  username: string;
  password: string;
}

// TODO: Dodać envy

const users: Record<Users, User> = {
  [Users.EventManager]: {
    name: 'Amanda Kennedy',
    username: 'user',
    password: 'password'
  },
  [Users.Admin]: {
    name: "John McCron",
    username: 'john',
    password: 'qwerty'
  }
}

export const getUser = (user: Users): User => users[user];
