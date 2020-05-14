import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:Video[]=[];
  constructor( private youtubeService:YoutubeService) { }

  ngOnInit() {
    this.youtubeService.getvideos().subscribe(
      response=>{
        //esta respuesta ya va aser de tipo youtube response
        this.videos.push(...response); //para que cada vez que carge 10 videos nuevos se cargen al arreglo
        console.log(this.videos);
      }
    );
  }

}
