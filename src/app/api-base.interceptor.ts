import { HttpContext, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environements/environement';

export const ApiBase : HttpInterceptorFn = (req, next) => {
  const url = req.url;
  if(url.endsWith('.svg') && url.includes('/assets/icons/')){
   return next(req);
  }
  const apiReq = req.clone({
    url: `${environment.apiUrl}${req.url}`,
    withCredentials: true
  });
  return next(apiReq);
};
