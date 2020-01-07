export interface UserDetails {
  _id: string;
  email: string;
  username: string;
  exp: number;
  iat: number;
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  username?: string;
}

export interface TokenPayloadUser {
  id: string;
  username?: string;
}
export interface TokenPayloadUpdatePass {
  id: string;
  username: string;
  newPassword: string;
}

export interface TokenPayloadABoutHeader {
  header: string;
  current: string;
}