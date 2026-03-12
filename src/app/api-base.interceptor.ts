import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environements/environement';

export const ApiBase : HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: `${environment.apiUrl}${req.url}`
  });
  return next(apiReq);
};