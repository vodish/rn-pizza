export type Screen1 = {
  navigation: {
    navigate(any): void,
    dispatch(): void,
    goBack(): void,
    reset(): void,
    isFocused(): boolean;
    canGoBack(): boolean;
    getId(): string | undefined;
    getParent(id?: string): any;
    getState(): void,
  },
  route: {
    key: string,
    name: string,
    params?: object
  }
}


export type TAddressType = 'filial' | 'address'

export type TAddress = {
  type: TAddressType,
  filialId: number,
  addressId: number,
  addressName: string,
  selected: boolean,
}






export type TFetchOptions = RequestInit & {
  checkRefresh?: boolean,
  headers?: HeadersInit & {
    'authorization'?: string
  }
}


export type TIngredient = {
    _id:            string
    name:           string
    type:           string
    proteins?:      number
    fat?:           number
    carbohydrates?: number
    calories?:      number
    price:          number
    image:          string
    image_mobile:   string
    image_large:    string
    __v?:           number
    uuid?:          number
    count?:         number
}
