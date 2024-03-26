export type TAddress = {
  type: 'filial' | 'address',
  filialId: number,
  addressId: number,
  addressName: string,
  selected: boolean,
}
