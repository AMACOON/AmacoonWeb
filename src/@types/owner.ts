export interface Owner {
    ID: number;
    Email: string;
    Name: string;
    CPF: string;
    Address: string;
    City: string;
    State: string;
    ZipCode: string;
    CountryID: number;
    Country: Country;
    Phone: string;
    Valid: boolean;
    ValidId: string;
    Observation: string;
    Clubs: ClubDetails[];
}

export interface Country {
    ID: number;
    Code: string;
    Name: string;
    IsActivated: boolean;
}

export interface ClubDetails {
    ID: number;
    OwnerID: number;
    ClubID: number;
    Club: Club;
    Associate: boolean;
    Valid: boolean;
}

export interface Club {
    ID: number;
    Name: string;
    Nickname: string;
    Email: string;
    Login: string;
    PasswordHash: string;
    Permission: number;
}
