import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private readonly http: HttpClient) {}

    public get(url, param): Observable<any> {
        return this.http.get(url);
    }
    public post(url, param): Observable<any> {
        return this.http.post(url, param);
    }
    public put(url, param): Observable<any> {
        return this.http.put(url, param);
    }
}
