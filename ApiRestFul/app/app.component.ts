import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES , RouteConfig , Router} from "angular2/router";
import {RestaurantListComponent} from "./components/restaurant_list.component";

@Component({
    //etiqueta
    selector: "mi-app",
    //url view
    templateUrl: "app/view/home.html",
    //directives
    directives: [ROUTER_DIRECTIVES,RestaurantListComponent]

})

export class AppComponent {
    public title:string = "Restaurants with Angular2";
}
