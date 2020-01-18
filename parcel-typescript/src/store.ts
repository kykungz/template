import { observable, computed, action } from 'mobx'

class Store {
  @observable
  value: number = 0

  @action
  setValue = (value: number) => {
    this.value = value
  }
}

export default new Store()
