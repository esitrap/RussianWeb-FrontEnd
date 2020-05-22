import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Auth } from 'src/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: Auth, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            return this.auth.isAuthenticated()
            .then(
                (authentication: boolean)=>{
                    if(authentication){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                    }
                }
            );
    }
}