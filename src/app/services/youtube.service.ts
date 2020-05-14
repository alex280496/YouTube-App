import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //permite el que el servico pueda ser utilizado de manera global en la aplicaion
})
export class YoutubeService {

  constructor(private http:HttpClient) { }
}
