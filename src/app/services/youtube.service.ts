import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //permite el que el servico pueda ser utilizado de manera global en la aplicaion
})
export class YoutubeService {

    private youtubeUrl='https://www.googleapis.com/youtube/v3';
    private apikey='AIzaSyD7nZHI5rJ3scfwqeTw78GQaQhmt1KOhIY';
    private playlist='UUuaPTYj15JSkETGnEseaFFg';
    private nextPageToken='';

  constructor(private http:HttpClient) { }

  getvideos(){
    const url=`${this.youtubeUrl}/playlistItems`;
    const params=new HttpParams()
        .set('part','snippet')
        .set('maxResults','10')
        .set('playlistId',this.playlist)
        .set('key',this.apikey)
        
    return this.http.get(url,{params});
  }
}
