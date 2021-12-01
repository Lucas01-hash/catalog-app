export class OptionsAdditionalModel {
  readonly title: string;
  readonly price: number;
}

export class CreateAdditionalDto {
  readonly product: string;
  readonly title: string;
  readonly behavior: string;
  readonly type: string;
  readonly minimum: number;
  readonly maximum: number;
  readonly options: OptionsAdditionalModel[];
}
