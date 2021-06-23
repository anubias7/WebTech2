export interface phoneDTO {
  _id: string;
  brand: string;
  type: string;
  battery: string;
  date: Date;
  price: number;
  quantity: number;
}

export interface CreatephoneDTO {
  brand: string;
  type: string;
  battery: string;
  date: Date;
  price: number;
  quantity: number;
}

export interface phoneResponseDTO {
  _id: string;
}
