require.config({
    paths: {
        angular: 'libs/angularjs/angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

// bootstrap
require([ 'angular', 'seed/seed-controller' ]);