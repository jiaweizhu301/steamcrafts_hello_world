import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSeo';
  platform: string;
constructor(@Inject(PLATFORM_ID) private platformId: any) {}
public ngOnInit(): void {
    this.platform = isPlatformBrowser(this.platformId) ? 'Browser' : 'Server';
    if (this.platform == 'Server'){
      // have to build before run, otherwise won't change (also not dynamic changing anymore if SSR)
      console.log('Server here, and this line should be shown in Server Console instead');
    }
  }
}