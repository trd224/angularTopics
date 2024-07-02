import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqResInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req.url);
    return next.handle(req).pipe(
      tap(event => {
        if(event.type == HttpEventType.Response){
          //event.body.title = 'jkjkjkjkjkjk'
          event.body[0].title = "rizwan"
          console.log(event.body)
        }
      })
    )
  }
}
