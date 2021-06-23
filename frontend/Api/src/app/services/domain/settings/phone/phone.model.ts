import { phoneDTO as phoneDTO, phoneResponseDTO as phoneResponseDTO } from './phone';

export interface phone {
    _id: string;
    brand: string;
    type: string;
    battery: string;
    date: Date;
    price: number;
    quantity: number;
}

export interface phoneResponse {
    _id: string;
}
export function tophones(productResponse: phoneDTO[]): phone[] {
    return productResponse.map(dto => tophone(dto));
}

export function tophone(phoneDTO: phoneDTO): phone {
    return {
        _id: phoneDTO._id,
        brand: phoneDTO.brand,
        type: phoneDTO.type,
        battery: phoneDTO.battery,
        date: phoneDTO.date,
        price: phoneDTO.price,
        quantity: phoneDTO.quantity
    };
}

export function toCreatedphone(phoneDTO: phoneResponseDTO): phoneResponse {
    return {
        _id: phoneDTO._id,
    };
}

