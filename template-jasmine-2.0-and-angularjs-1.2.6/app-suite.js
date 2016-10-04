/* globals describe, beforeEach, inject, it, expect */

'use strict';

describe('The main controller', function () {

    ////////////////////////////////////////////////////////////////////////////
    // Now we need to do a few things to tell our tests what we are testing. We 
    // need to tell it what module we are testing. We can do this by using the 
    // beforeEach() function to load the angular module that contains our 
    // MainController (in this case, it's just myApp):
    ////////////////////////////////////////////////////////////////////////////
    
    // Load the module with MainCtrl
    beforeEach(module('App'));

    ////////////////////////////////////////////////////////////////////////////
    // Next, we're going to pretend that we're Angular loading the controller 
    // when it needs to be instantiated on the page. We can do this by manually 
    // instantiating the controller and handing it a $scope object. Creating it 
    // manually also allows us to interact with the scope throughout the tests.
    ////////////////////////////////////////////////////////////////////////////
    
    var ctrl, 
        scope;
        
    ////////////////////////////////////////////////////////////////////////////
    // Inject the $controller and $rootScope services in the beforeEach block, 
    // create a new scope that's a child of the $rootScope, then the controller.
    // Now, we have access to both the controller and its scope.
    ////////////////////////////////////////////////////////////////////////////
    
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));
    
    ////////////////////////////////////////////////////////////////////////////
    // Now that everything is all set up and ready for testing, let's write one. 
    // It's always a good idea to test functionality of code that we write. 
    // Anytime that variables can be manipulated by the user or we're running 
    // any custom actions, it's usually a good idea to write a test for it.
    // 
    // We can write a test for sayHello() that verifies that $scope.greeting is 
    // undefined before running then contains our expected message after: 
    ////////////////////////////////////////////////////////////////////////////

    it('should create $scope.greeting when calling sayHello', function () {
        expect(scope.greeting).toBeUndefined();
        scope.sayHello();
        expect(scope.greeting).toEqual('Hello Phil');
    });
});
