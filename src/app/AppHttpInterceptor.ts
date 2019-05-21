import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
 
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {
    }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepter request:'+req);
        return next.handle(req);
        //return Observable.apply(this.handleAccess(req, next));
    }
    
//     private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
//         const token = await this.msalService.getAccessToken();
//         let changedRequest = request;
//         // HttpHeader object immutable - copy values
//         const headerSettings: {[name: string]: string | string[]; } = {};
    
//         for (const key of request.headers.keys()) {
//         headerSettings[key] = request.headers.getAll(key);
//         }
//         if (token) {
//         headerSettings['Authorization'] = 'Bearer ' + token;
//         }
//         headerSettings['Content-Type'] = 'application/json';
//         const newHeader = new HttpHeaders(headerSettings);
    
//         changedRequest = request.clone({
//         headers: newHeader});
//         return next.handle(changedRequest).toPromise();
//   }
}