import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:Video[]=[];
  constructor( private youtubeService:YoutubeService) { }

  ngOnInit() {
   this.cargarVideos();
  }
  cargarVideos(){
    this.youtubeService.getvideos().subscribe(
      response=>{
        //esta respuesta ya va aser de tipo youtube response
        this.videos.push(...response); //para que cada vez que carge 10 videos nuevos se cargen al arreglo
        console.log(this.videos);
      }
    );
  }

  mostrarVideo(video:Video){
    console.log(video);
    Swal.fire({ //para mostrar el video atarves de sweetalert2 y el codifo de iframe de you tube
      html:`
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/${video.resourceId.videoId}"
        frameborder="0"
        allow="accelerometer; 
        autoplay; 
        encrypted-media;
        gyroscope; 
        picture-in-picture" allowfullscreen>
      </iframe>
      `
    });
  }

}
