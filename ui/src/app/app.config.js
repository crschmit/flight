/* @ngInject */
export const config =
  ($stateProvider) => {
    $stateProvider.state('fapp', {
      views: {
        'locationsView': 'flightLocations'
      }
    })
  }
