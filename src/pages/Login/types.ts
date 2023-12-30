export interface LoginProps {
  email: string;
  password: string;
}

export interface ValidationTypeProps {
  type: any;
}

export interface ResponseToken {
  accessToken: string;
  refreshToken: string;
}
