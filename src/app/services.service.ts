import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  user:User
  
  constructor(private http:HttpClient) { 
    this.user =new User("","","","","")
  }

  getUser(username: string){

		
		interface ApiResponse{

	        public_repos:number,
	        login:string,
					bio:any,
	        avatar_url:string,
	        created_at:Date,    
	    }

	    let promise =new Promise<void>((resolve,reject)=>{
	    	// We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
	        this.http.get<ApiResponse>(environment.api + username).toPromise().then(response=>{
	            // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
	            this.user.avatar_url=response?.avatar_url;
	            this.user.login=response?.login;
							this.user.bio=response?.bio;
	            this.user.public_repos=response?.public_repos;
	            this.user.created_at=response?.created_at;
							

	            resolve()
	        },
	        error=>{
	                reject(error)
	            }
	        )

            })
	    return promise
          }
          getRepo(username:string):Observable<any[]>{
           return this.http.get<any[]>(environment.api + username + "/repos")
          }
					getMercy():Observable<any>{
						return this.http.get<any>(environment.api + "wairimukanene")
					}
        }


