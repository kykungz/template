import { observable, computed, action } from 'mobx'

class Store {
  @observable
  value = 0

  @action
  setValue = value => {
    this.value = value
  }
}

export default new Store()
