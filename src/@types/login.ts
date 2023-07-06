// src/@types/login.ts

export interface Owner {
    ID: number;
    Email: string;
    Name: string;
    Valid: boolean;

  }
  
  export interface LoginResponse {
    Owner: Owner;
    Token: string;
    IsAssociate: boolean;
  }
  