import { CanActivateFn } from '@angular/router';

export const canDeactiveGuard: CanActivateFn = (route, state) => {
  
  if(window.confirm("are you sure to conform !")){
    return true;
  }
  return false
};
