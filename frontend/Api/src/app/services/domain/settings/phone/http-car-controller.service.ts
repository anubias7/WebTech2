import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { phoneController } from './phone.controller.service';
import { phoneDTO, phoneResponseDTO, CreatephoneDTO } from './phone';
import { phoneResponse } from './phone.model';

@Injectable()
export class HttpProductController implements phoneController {
    private readonly BASE_URL = `http://localhost:5000/api/phone`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public createphone(request: CreatephoneDTO): Observable<phoneResponseDTO> {
        return this.httpClient.post(`${this.BASE_URL}/add`, request).pipe(
            map((res: phoneResponse) => res)
        );
    }
    public editphone(request: phoneDTO): Observable<phoneDTO> {
        return this.httpClient.put(`${this.BASE_URL}/${request._id}`, request).pipe(
            map((res: phoneDTO) => res)
        );
    }
    // tslint:disable-next-line: variable-name
    public deletephone(_id: string) {
        return this.httpClient.post(`${this.BASE_URL}/delete/${_id}`, null).pipe();
    }
    public getphones(): Observable<phoneDTO[]> {
        return this.httpClient.post(`${this.BASE_URL}`, null).pipe(
            map((res: phoneDTO[]) => res)
        );
    }

}
