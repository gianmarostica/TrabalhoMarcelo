import { Injectable } from '@angular/core';
import { Classe } from './models/classe';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

constructor(private http:HttpClient) { }

save(local: Classe): Observable<any>{
  return this.http.post(environment.urlApi+"classes/", local)
  .catch((error: any) => Observable.throw(error));
}

update(local: Classe): Observable<any>{
  return this.http.put(environment.urlApi+"classes/"+local.idClasse, local)
  .catch((error: any) => Observable.throw(error));
}

findAll(): Observable<any>{
  return this.http.get(environment.urlApi+"classes/")
  .catch((error: any) => Observable.throw(error));
}

remove(id: number): Observable<any> {
  return this.http.delete(environment.urlApi+"classes/"+id)
  .catch((error: any) => Observable.throw(error));
}
}
