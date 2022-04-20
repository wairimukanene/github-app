import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user:User
  repoData
  constructor(private http:HttpClient) { }

  getUserData(username: string){

		this.repoData.length = 0; // Empties the Array From Previous Request After a New Request

		// The HttpClient module converts the response into an object but does not specify what type of object it is. We can tell HttpClient what type of response we are expecting by defining an interface
		// Here we create an interface ApiResponse that contains the properties that we need from the response. 
		interface ApiResponse{

	        public_repos:number,
	        login:string,
	        avatar_url:string,
	        created_at:Date,    
	    }

	    let promise =new Promise<void>((resolve,reject)=>{
	    	// We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
	            this.user.avatar_url=response?.avatar_url;
	            this.user.login=response?.login;
	            this.user.public_repos=response?.public_repos;
	            this.user.created_at=response?.created_at;

	            resolve()
	        },
	        error=>{
	                reject(error)
	            }
	        )

	        // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
	        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
	        	// We then pass the interface with the get method. 
	        	for(var i=0; i<response.length; i++)
	        	{
	        		// If the response is successful we create a new Repository instance and passing in the response properties. We then assign this new Repository instance to the newUserData property.
	        		this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
	        		this.repoData.push(this.newUserData);
	        	}

	            resolve()

	        },
	        error=>{

	                reject(error)
	            }
	        )
	    })

	    return promise
	}

}

