import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Location } from "../models/location";



@Injectable()
export class LocationServices {

  constructor(private httpClient: HttpClient,
  ) { }

  public locationList: Location[] = [];

  readonly baseUrl = "https://localhost:44391/api/Location";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.baseUrl + '/get', this.httpOptions)
  }

  getLocationById(id: number): Observable<Location> {
    return this.httpClient.get<Location>(this.baseUrl + '/get/' + id, this.httpOptions)
  }
  async getLocationByName(name: string) {
    return await this.httpClient.get<Location>(this.baseUrl + `/get/byName/` + name, this.httpOptions).toPromise();
  }

  addLocation(object: Location): Observable<Location> {
    return this.httpClient.post<Location>(this.baseUrl + '/post', object, this.httpOptions)
  }

  editLocation(object: Location): Observable<Location> {
    return this.httpClient.put<Location>(this.baseUrl+ '/edit', object, this.httpOptions)
  }

  deleteLocation(id: number) {
    return this.httpClient.delete<Location>(this.baseUrl + '/delete/' + id, this.httpOptions)

  }
}
