import { Component, OnInit } from '@angular/core';

// test
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

// test http
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private http: HttpClient) { 
    if(isPlatformBrowser(this.platformId)){
      console.log('this is browser at least');
    }

    if(isPlatformServer(this.platformId)) {
      console.log('this line is run at server');
    }
  }

  ngOnInit(): void {

    this.res = this.http.get("https://6m8duakd88.execute-api.us-east-1.amazonaws.com/default/simple_res")
      .subscribe((res)=>{
        console.log(res);
      })

    if(isPlatformBrowser(this.platformId)){
      console.log('this is browser at least11');
    }

    if(isPlatformServer(this.platformId)) {
      console.log('this line is run at server11');
    }
  }

  
}
