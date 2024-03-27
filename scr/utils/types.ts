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


