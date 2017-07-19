const user = (id, username) => ({
  id,
  username
})

/* @ngInject */
class UsersService {

  allUsers = [
    user(0, 'Visitor'),
    user(1, 'Egon'),
    user(2, 'Ray'),
    user(3, 'Winston'),
    user(4, 'Peter')
  ]

  currentUser = 0

  constructor ($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
  }

  getAllUsers () {
    return this.allUsers
  }

  getCurrentUser () {
    return this.currentUser
  }

  setCurrentUser (id) {
    this.currentUser = id
  }
}

export default UsersService
