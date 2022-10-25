import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Set iframe source';
  url: string = "https://app.powerbi.com/reportEmbed?reportId=77f3e5a8-b465-4f55-8bc8-61512086dad5&autoAuth=true&ctid=2b60f742-477e-42f8-a7ad-3621d21bc607";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
