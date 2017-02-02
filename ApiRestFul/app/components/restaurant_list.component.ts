import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES , RouteConfig , Router} from "angular2/router";
import {Restaurant} from "../model/restaurant";
import {RestaurantService} from "../services/restaurant.service";

@Component({
    selector: "restaurant-list",
    templateUrl: "app/view/restaurant_list.html",
    providers: [RestaurantService]

})

export class RestaurantListComponent implements OnInit{
    public title:string = "Restaurants";
    public restaurants : Restaurant[];
    public status:string;
    public errorMessage;

    constructor(private restaurant_service: RestaurantService){}
    ngOnInit(){
        this.getRestaurants();
        console.log('restaurantes cargados');
    }
    getRestaurants(){
        this.restaurant_service.getRestaurants()
        .subscribe(
            result => {
                this.restaurants = result.data;
                this.status = result.status;
                console.log(this.restaurants);
                if(this.status !== "success"){
                    alert("error en el servidor");
                }
            },
            error => {
                this.errorMessage =<any>error;
                if(this.errorMessage !== null){
                    console.log(this.errorMessage);
                    alert("error en la peticion");
                }
            }
        );

    }
}