import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL_Shortner';
  longUrl: string = "";
  shortUrl: string = "";
  show: boolean = false;
  response: any[] = [];

  constructor(private apiService: ServiceService) { }
  shortenUrl() {
    this.apiService.getUrls(this.longUrl).subscribe((urls: any) => {
      this.response = urls;
      console.warn(urls);
      // console.warn(this.response);
      this.shortUrl = this.response[<any>"shrtlnk"];
      this.show=true;
    })

  }
  copyInputMessage(inputElement: { select: () => void; setSelectionRange: (arg0: number, arg1: number) => void; }){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
