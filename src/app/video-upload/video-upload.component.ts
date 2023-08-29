import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
})
export class VideoUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  handleFileInput(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('video', this.selectedFile);

    this.http.post('/upload', formData).subscribe(
      (response) => {
        console.log('Video uploaded successfully', response);
      },
      (error) => {
        console.error('Error uploading video', error);
      }
    );
  }
}
