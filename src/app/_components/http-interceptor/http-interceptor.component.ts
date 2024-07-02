import { Component, OnInit } from '@angular/core';
import { ServiceForInterceptorService } from 'src/app/_services/service-for-interceptor.service'

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.scss']
})
export class HttpInterceptorComponent implements OnInit{

  posts: any;
  constructor(
    private serviceForInterceptorService: ServiceForInterceptorService
  ){

  }

  ngOnInit(): void {
    this.serviceForInterceptorService.getPosts().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    })
  }

}
