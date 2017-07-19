import templateUrl from './currentUser.component.html'

/* @ngInject */
const controller = class CurrentUserController {
  constructor ($log, $users) {
    $log.log('CurrentUserController')

    this.$users = $users
  }

  getUser () {
    return this.$users.getCurrentUser()
  }
}

export default {
  templateUrl,
  controller,
  controllerAs: '$currentUserCtrl'
}
