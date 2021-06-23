import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { phoneResponse } from './phone.model';
import { CreatephoneDTO as CreatephoneDTO, phoneDTO as phoneDTO, } from './phone';

@Injectable()
export abstract class phoneController {
    public abstract getphones(): Observable<phoneDTO[]>;
    public abstract createphone(request: CreatephoneDTO): Observable<phoneResponse>;
    public abstract editphone(request: phoneDTO): Observable<phoneDTO>;
    // tslint:disable-next-line: variable-name
    public abstract deletephone(_id: string);
}
