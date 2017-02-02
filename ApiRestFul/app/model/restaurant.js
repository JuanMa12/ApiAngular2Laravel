System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Restaurant;
    return {
        setters:[],
        execute: function() {
            Restaurant = (function () {
                function Restaurant(id, nombre, direccion, descripcion, imagen, precio) {
                    this.id = id;
                    this.nombre = nombre;
                    this.direccion = direccion;
                    this.descripcion = descripcion;
                    this.imagen = imagen;
                    this.precio = precio;
                }
                return Restaurant;
            }());
            exports_1("Restaurant", Restaurant);
        }
    }
});
//# sourceMappingURL=restaurant.js.map