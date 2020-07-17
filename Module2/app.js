(function (params) {
    'use strict'

    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var itemstobuy = this;
        itemstobuy.itemsAvailable = ShoppingListCheckOffService.getItems();
        itemstobuy.bought = function name(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.itemsBought = ShoppingListCheckOffService.listItemsBought();
    }


    function ShoppingListCheckOffService() {
        var service = this;
        var itemsAvailable = [{
                name: "Monitor",
                quantity: 1
            },
            {
                name: "Mouse",
                quantity: 2
            },
            {
                name: "Keyboard",
                quantity: 3
            },
            {
                name: "GPU",
                quantity: 2
            },
            {
                name: "Game",
                quantity: 10
            }
        ];

        var itemsBought = [];

        service.buyItem = function (index) {
            itemsBought.push(itemsAvailable[index]);
            itemsAvailable.splice(index, 1);
        };

        service.getItems = function () {
            return itemsAvailable;
        }

        service.listItemsBought = function () {
            return itemsBought;
        }

    }
})();