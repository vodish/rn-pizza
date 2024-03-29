import { makeAutoObservable, runInAction } from 'mobx'
import { TIngredient } from '../utils/types'
import { fetchRequest } from '../utils/api'
import { MobxCounter } from './mobx-counter'


class IngredientsStore {
  list: TIngredient[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetch() {

    const res = await fetchRequest<{ data: TIngredient[] }>('/api/ingredients');
    
    runInAction(() => {
      MobxCounter.increment() // акшен другого стора, для ошибки
      this.list = res.data
    })

  }
}


export const MobxIngredients = new IngredientsStore()