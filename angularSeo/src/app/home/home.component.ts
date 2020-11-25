import { Component, OnInit } from '@angular/core';

// test
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) { 
    if(isPlatformBrowser(this.platformId)){
      console.log('this is browser at least');
    }

    if(isPlatformServer(this.platformId)) {
      console.log('this line is run at server');
    }
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      console.log('this is browser at least11');
    }

    if(isPlatformServer(this.platformId)) {
      console.log('this line is run at server11');
    }
  }

  
}
