import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({providedIn: 'root', })
export class ApiService {
  constructor(private http: HttpClient) { }

  getDefinition(): Observable<any> {
    return this.http.get('http://localhost:4200/api').pipe(
      map((result: any) => result.en[0].definitions[0].definition),
      tap((res) => {
      console.log(res)
    }))
  }
}
