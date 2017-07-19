/* @ngInject */
export default
  ($stateProvider) => {
    $stateProvider.state('app', {
      views: {
        'locations': 'flightLocations'
      }
    })
  }
