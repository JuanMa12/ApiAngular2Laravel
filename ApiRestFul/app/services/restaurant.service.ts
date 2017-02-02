import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurant} from "../model/restaurant";

@Injectable()
export class RestaurantService{
    public BASE_URL = "http://angular2.local";
    constructor(private _http : Http){}

    getRestaurants(){
        return this._http.get(this.BASE_URL+'/restaurants')
            .map(res => res.json());
    }

}
