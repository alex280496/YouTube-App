import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //permite el que el servico pueda ser utilizado de manera global en la aplicaion
})
export class YoutubeService {

    private youtubeUrl='https://www.googleapis.com/youtube/v3';
    private apikey='AIzaSyD7nZHI5rJ3scfwqeTw78GQaQhmt1KOhIY';
    private playlist='UUuaPTYj15JSkETGnEseaFFg';
    private nextPageToken='';

  constructor(private http:HttpClient) { }
}
