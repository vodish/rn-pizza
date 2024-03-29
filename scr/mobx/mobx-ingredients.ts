import { makeAutoObservable, runInAction } from 'mobx'
import { TIngredient } from '../utils/types'
import { fetchRequest } from '../utils/api'
import { MobxCounter } from './mobx-counter'


class IngredientsStore {

  constructor() {
    makeAutoObservable(this)
  }

  list: TIngredient[] = []


  async fetch() {

    const res = await fetchRequest<{ data: TIngredient[] }>('/api/ingredients');
    
    runInAction(() => {
      MobxCounter.increment()
      this.list = res.data
    })

    // let res   = await fetch(`https://norma.nomoreparties.space/api/ingredients`)
    // const json  = await res.json()
    // console.log(json)

  }




}


export const MobxIngredients = new IngredientsStore()