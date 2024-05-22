export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserRegisterInput extends UserLoginInput {
  name?: string;
  confirmPassword?: string;
}
