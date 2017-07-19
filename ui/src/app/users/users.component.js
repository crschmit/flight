import templateUrl from './users.component.html'

/* @ngInject */
const controller = class UsersController {
  constructor ($log, $users) {
    $log.log('UsersController ...')

    this.$users = $users
  }

  getAllUsers () {
    return this.$users.getAllUsers()
  }

  setCurrentUser (id) {
    this.$users.setCurrentUser(id)
  }
}

export default {
  templateUrl,
  controller,
  controllerAs: '$usersCtrl'
}
