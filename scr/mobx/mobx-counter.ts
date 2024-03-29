import { makeAutoObservable, makeObservable, observable, action } from 'mobx'

class CounterStore {

  value = 0

  constructor() {
    // makeAutoObservable(this)
    
    makeObservable(this, {
      value: observable,
      increment: action,
      decrement: action,
    })
  }


  increment() {
    this.value = this.value + 1
  }

  decrement() {
    this.value = this.value - 1
  }

}


export const MobxCounter = new CounterStore()