export interface Cat {
  CatID: number;
  Name: string;
  Registration: string;
  Microchip: string;
  BreedName: string;
  BreedID: string;
  ColorID: number;
  ColorName: string;
  EmsCode: string;
  Sex: string;
  Birthdate: Date;
  CountryCode: string;
  FatherName: string;
  MotherName: string;
  BreederName: string;
  BreederOwner: string;
  BreederID: number;
  OwnerID: number;
  OwnerName: string;
  Address: string;
  ZipCode: string;
  City: string;
  State: string;
  Phone: string;
}

export interface ManualCat {
  name: string;
  chip: string;
  breed: string;
  color: string;
  ems: string;
  ffb: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerGatil: string;
  ownerCpf: string;
}
