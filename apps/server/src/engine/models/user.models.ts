export interface BaseUserObject {
  id: string;
  email: string;
}

export interface MinimalUserObject extends BaseUserObject {
  name: string;
}
