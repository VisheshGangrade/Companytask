import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoUploader';
  
    videoUrl: string = ''; 
    setVideoUrl(url: string): void {
      this.videoUrl = url;
    }
  }
  

