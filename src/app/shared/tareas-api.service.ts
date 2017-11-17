import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';



import { Tarea } from '../model/tarea';


@Injectable()
export class TareasApiService {
    private baseUrl = 'https://tareas-16df.restdb.io';
    apiKey = '5a0dc9cd1ef3dc24313a7d00';
    constructor(private http: HttpClient) { }

    protected initHeaders(): HttpHeaders {
        return new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('x-apikey', this.apiKey);
    }

    getTareas(): Observable<Tarea[]> {
        const url = this.baseUrl + '/rest/tareas';
        const my_headers = this.initHeaders();
        return this.http.get<Tarea[]>(url, { headers: my_headers });
    }

}

