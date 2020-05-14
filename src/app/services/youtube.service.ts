import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import {map}from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //permite el que el servico pueda ser utilizado de manera global en la aplicaion
})
export class YoutubeService {

    private youtubeUrl='https://www.googleapis.com/youtube/v3';
    private apikey='AIzaSyD7nZHI5rJ3scfwqeTw78GQaQhmt1KOhIY';
    private playlist='UUuaPTYj15JSkETGnEseaFFg';
    private nextPageToken='';
    private part='snippet';
    
  constructor(private http:HttpClient) { }

  getvideos(){
    const url=`${this.youtubeUrl}/playlistItems`;
    const params=new HttpParams()
        //HttpParams permite establecer todos los parametros 
        .set('part','snippet')
        .set('maxResults','10')
        .set('playlistId',this.playlist)
        .set('key',this.apikey)
        //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet
        //&key=AIzaSyD7nZHI5rJ3scfwqeTw78GQaQhmt1KOhIY&playlistId=UUuaPTYj15JSkETGnEseaFFg
       // &maxResults=10
    return this.http.get<YoutubeResponse>(url,{params})
                                .pipe(
                                  map(res=>{
                                    this.nextPageToken=res.nextPageToken;
                                    return res.items;
                                  }),
                                  map(items=>{ //recibo los items todos
                                    return items.map(video=>{ // items es un arreglo y lo paso por
                                      //el metodo map de los arreglos para extraer solo los snippets
                                      //items.map recorre todos los items del arreglo, es como un foreach
                                      return video.snippet;//regreso un uevo arreglo de snippets
                                    })
                                  })
                                );
    //le esyoy especificando un tipode dato a la peticion httpp
  }
}
