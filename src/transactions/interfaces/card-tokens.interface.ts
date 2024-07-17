export interface ICardTokenResponse {
  status: string;
  data: Data;
}

export interface Data {
  id: string;
  created_at: Date;
  brand: string;
  name: string;
  last_four: string;
  bin: string;
  exp_year: string;
  exp_month: string;
  card_holder: string;
  created_with_cvc: boolean;
  expires_at: Date;
  validity_ends_at: Date;
}

export interface ICardTokenRequest {
  number: string;
  cvc: string;
  exp_month: string;
  exp_year: string;
  card_holder: string;
}
