import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Req', req.urlWithParams);
    console.log('Req', req.body);
    return next.handle(req).do(evt => {
      console.log('--->', evt);
      if (evt instanceof HttpResponse) {
        console.log('--->', evt.body);
      }
    });

  }
}
