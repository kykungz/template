import { observable, computed, action } from 'mobx'

class Store {
  @observable
  value: number = 0

  @action
  setValue = (value: number) => {
    this.value = value
  }

  @computed
  get computed() {
    return this.value * 2
  }
}

export const store = new Store()
