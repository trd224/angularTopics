import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/_services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  shortLink: string = '';
  loading: boolean = false;
  file!: File;

  constructor(
    private fileUploadService: FileUploadService
  ){

  }

  
  onChange(event: any){
    //console.log("sdsds")
    //console.log(event);
    this.file = event.target.files[0];
    //this.fileUploadService.upload();
    //console.log(this.file);
  }

  onUpload(){
    this.loading = !this.loading;
    //console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(res => {
      console.log(res);
    })
  }
}
