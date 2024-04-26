import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiKey: string = 'YSfTl1ehlJCZ38taF01PXRSQUXIEPsIxJ1fSL2C1M1Cmv';
  private apiUrl: string = 'https://shrtlnk.dev/api/v2/link';

  constructor(private http: HttpClient) { }

  getUrls(longUrl: string) {
    const headers = new HttpHeaders({
      'api-key': this.apiKey,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = { url: longUrl };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
