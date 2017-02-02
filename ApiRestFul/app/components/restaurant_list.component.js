System.register(["angular2/core", "../services/restaurant.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restaurant_service_1;
    var RestaurantListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_service_1_1) {
                restaurant_service_1 = restaurant_service_1_1;
            }],
        execute: function() {
            RestaurantListComponent = (function () {
                function RestaurantListComponent(restaurant_service) {
                    this.restaurant_service = restaurant_service;
                    this.title = "Restaurants";
                }
                RestaurantListComponent.prototype.ngOnInit = function () {
                    this.getRestaurants();
                    console.log('restaurantes cargados');
                };
                RestaurantListComponent.prototype.getRestaurants = function () {
                    var _this = this;
                    this.restaurant_service.getRestaurants()
                        .subscribe(function (result) {
                        _this.restaurants = result.data;
                        _this.status = result.status;
                        console.log(_this.restaurants);
                        if (_this.status !== "success") {
                            alert("error en el servidor");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("error en la peticion");
                        }
                    });
                };
                RestaurantListComponent = __decorate([
                    core_1.Component({
                        selector: "restaurant-list",
                        templateUrl: "app/view/restaurant_list.html",
                        providers: [restaurant_service_1.RestaurantService]
                    }), 
                    __metadata('design:paramtypes', [restaurant_service_1.RestaurantService])
                ], RestaurantListComponent);
                return RestaurantListComponent;
            }());
            exports_1("RestaurantListComponent", RestaurantListComponent);
        }
    }
});
//# sourceMappingURL=restaurant_list.component.js.map