import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiList, Emprunt } from 'entities';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<ApiList<Emprunt>>(environment.serverUrl+'/api/emprunts');
  }
  getEmprunt(){
    return this.http.get<Emprunt[]>(environment.serverUrl+'/api/emprunts');
  }
  addEmprunt(emprunt: Emprunt): Observable<Emprunt> {
    return this.http.post<Emprunt>(environment.serverUrl+'/api/emprunts', emprunt);
  }
  deleteEmprunt(id:number) {
    return this.http.delete(environment.serverUrl + '/api/emprunts/' + id);
  }
  updateEmprunt(id: number, emprunt: Emprunt) {
    return this.http.put<Emprunt>(environment.serverUrl + '/api/emprunts/' + id, emprunt);
  }
}
