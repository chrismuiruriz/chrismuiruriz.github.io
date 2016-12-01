var app = angular.module('testApp', ['ngTagsInput']);
app.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});
app.run(function ($rootScope) {
    $rootScope.typeOf = function (value) {
        return typeof value;
    };
});
app.directive('stringToNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (value) {
                return '' + value;
            });
            ngModel.$formatters.push(function (value) {
                return parseFloat(value);
            });
        }
    };
});
app.controller('testCtrl', function ($scope, $http) {

    //some dummy tags
    $scope.tags = [
        {text: 'White'},
        {text: 'Red'},
        {text: 'Sparkling'}
    ];
    $scope.cartItems = [];
    $scope.loadTags = function (query) {
        return $http.get('/tags?query=' + query);
    };

    //remove an item from cart
    $scope.removeFromCart = function (array, index) {
        array.splice(index, 1);
    };

    //calculate the total amount in cart
    $scope.getTotalInCart = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartItems.length; i++) {
            var item = $scope.cartItems[i];
            total += (item.item_price * item.item_qty);
        }
        return total.toFixed(2);
    };

    //get the total number of bottles in cart
    $scope.getBottles = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartItems.length; i++) {
            var item = $scope.cartItems[i];
            total += (1 * item.item_qty);
        }
        return total;
    };

    //add item to cart
    $scope.addToCart = function (array, index) {
        var product = array[index];
        var obj = {
            item_id: product.product_id,
            item_name: product.product_name,
            item_qty: product.bottle_qty,
            item_price: product.bottle_price
        };
        var addCart = true;
        //check if product exists already
        for (var i = 0; i < $scope.cartItems.length; i++) {
            if ($scope.cartItems[i].item_id === product.product_id) {
                addCart = false;
            }
        }
        if (addCart) {
            $scope.cartItems.push(obj);
        }
    };

    //check if an item is in cart
    $scope.isInCart = function (product_id) {
        var status = false;
        //check if product exists already
        for (var i = 0; i < $scope.cartItems.length; i++) {
            if ($scope.cartItems[i].item_id === product_id) {
                status = true;
            }
        }
        return status;
    }

    //Clear or Empty cart
    $scope.emptyCart = function () {
        $scope.cartItems = [];
    };

    //fetch dummy products
    $http({method: 'GET', url: '../getProducts.php'}).success(function (response) {
        $scope.names = response;
    });

    //fetch dummy products in cart
    $http({method: 'GET', url: '../getCartItems.php'}).success(function (response) {
        $scope.cartItems = response;
        $scope.totalItems = $scope.cartItems.length;
    });
});