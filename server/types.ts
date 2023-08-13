export interface IStatics {
  email: string;
  password: string;
  username?: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  joinedDate: Date;
  profilePicture: string;
}
