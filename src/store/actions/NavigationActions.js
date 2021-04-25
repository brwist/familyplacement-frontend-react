export default class NavigationActions {
  static SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE'
  static RESET = 'RESET'

  static setActiveRoute({ activeRoute, ...rest }) {
    return {
      type: this.SET_ACTIVE_ROUTE,
      payload: { activeRoute, ...rest },
    }
  }

  static resetState() {
    return {
      type: this.RESET,
    }
  }
}
