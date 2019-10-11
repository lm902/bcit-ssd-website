export default class ActionRegistry {
  constructor () {
    this.registeredActions = { }
  }

  static get ActionType () {
    return {
      BROWSER_NAVIGATION: 0,
      MENU_BUTTON_INVOKE: 1
    }
  }

  register (type, action) {
    console.log('Action registered for type: ' + type)
    if (typeof this.registeredActions[type] === 'undefined') {
      this.registeredActions[type] = []
    }
    this.registeredActions[type].push(action)
  }

  remove (type, action) {
    console.log('Action removed for type: ' + type)
    if (typeof this.registeredActions[type] === 'undefined') {
      return
    }
    if (!this.registeredActions[type].includes(action)) {
      return
    }
    this.registeredActions[type].splice(this.registeredActions[type].indexOf(action), 1)
  }

  removeAll (type) {
    this.registeredActions[type] = undefined
  }

  dispatch (type, data) {
    console.log('Action dispatched for type ' + type)
    if (this.registeredActions[type]) {
      console.log('Registered: ' + this.registeredActions[type].length)
      for (const action of this.registeredActions[type]) {
        action(data)
      }
    }
  }
}
