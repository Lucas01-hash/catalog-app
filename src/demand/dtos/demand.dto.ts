export class CreateDemandDto {
  readonly receive_at_home: boolean;
  readonly form_of_payment: 'cartão' | 'dinheiro';
  readonly user: string;
}
