import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jogador } from './models/jogador';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JogadorService {

constructor(private http:HttpClient) { }
save(local: Jogador): Observable<any>{
  return this.http.post(environment.urlApi+"jogadores/", local)
  .catch((error: any) => Observable.throw(error));
}

update(local: Jogador): Observable<any>{
  return this.http.put(environment.urlApi+"jogadores/"+local.idJogador, local)
  .catch((error: any) => Observable.throw(error));
}

findAll(): Observable<any>{
  return this.http.get(environment.urlApi+"jogadores/")
  .catch((error: any) => Observable.throw(error));
}

remove(id: number): Observable<any> {
  return this.http.delete(environment.urlApi+"jogadores/"+id)
  .catch((error: any) => Observable.throw(error));
  }
}
