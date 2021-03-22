import { makeAutoObservable } from 'mobx'

class Store {
  value = 0

  constructor() {
    makeAutoObservable(this)
  }

  setValue = (value: number) => {
    this.value = value
  }
}

export const store = new Store()
