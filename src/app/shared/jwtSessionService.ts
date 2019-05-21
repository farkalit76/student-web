import { Injectable } from '@angular/core';
import { LoginResponse } from '../login/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class JwtSessionService {

    accessToken = Object.create({});

    setAccessToken(data:LoginResponse){
        this.accessToken["access_token"] = data.accessToken
    }

    getAccessToken():string{
        console.log("access tken:"+this.accessToken["access_token"]);
        return this.accessToken["access_token"];   
    }

}