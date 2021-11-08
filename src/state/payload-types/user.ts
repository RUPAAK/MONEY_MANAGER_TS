export enum RoleType {
  admin = "admin",
  user = "user",
  superadmin = " superadmin",
}
export interface UserLoginResponse {
  accessToken: string;
  data: {
    emailVerified: boolean;
    photoUrl: string;
    active: boolean;
    email: string;
    name: string;
    role: {
      active: boolean;
      name: string;
      resources: [
        {
          access: string[];
          limitedField: string[] | [];
          _id: string;
          name: string;
          isUser: boolean;
        }
      ];
      id: string;
    };
    createdAt: Date;
    updatedAt: Date;
    id: string;
  };
}

export interface UserRegisterResponse {
  accessToken: string;
  data: {
    emailVerified: boolean;
    photoUrl: string;
    active: boolean;
    email: string;
    name: string;
    role: {
      active: boolean;
      name: RoleType;
      resources: [
        {
          access: string[];
          limitedField: string[] | [];
          _id: string;
          name: string;
          isUser: boolean;
        }
      ];
      id: string;
    };
    createdAt: Date;
    updatedAt: Date;
    id: string;
  };
}
