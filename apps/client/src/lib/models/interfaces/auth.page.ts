export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserRegisterInput extends UserLoginInput {
  name?: string;
  confirmPassword?: string;
}

export interface User extends UserRegisterInput {
  createdAt: Date;
  updatedAt: Date;
  mergedCalendarId?: number;
  userCalenderId?: string;
  hashedPassword?: string;
}
