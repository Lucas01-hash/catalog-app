export interface OptionsAdditionaisModel {
  readonly title: string;
  readonly amount_option: number;
  readonly price_amount_options: number;
}

export interface AdditionaisProductModel {
  readonly additional_id: string;
  readonly options_additional: OptionsAdditionaisModel[];
}

export class InsertProductShoppingCart {
  readonly user: string;
  readonly product: string;
  readonly amount_product: number;
  readonly additionais: AdditionaisProductModel[];
  readonly note: string;
}
