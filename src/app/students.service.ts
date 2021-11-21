import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IStudents } from "./students";
@Injectable()
export class StudentsService {
  private _url: string = "/assets/data/students.json";
  constructor(private http: HttpClient) {}
  getEmployess(): Observable<IStudents[]> {
    return this.http.get<IStudents[]>(this._url);
  }
}
