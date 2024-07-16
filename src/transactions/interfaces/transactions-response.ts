export interface ITransactionResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: string;
  created_at: Date;
  finalized_at: null;
  amount_in_cents: number;
  reference: string;
  customer_email: string;
  currency: string;
  payment_method_type: string;
  payment_method: PaymentMethod;
  status: string;
  status_message: null;
  billing_data: null;
  shipping_address: ShippingAddress;
  redirect_url: string;
  payment_source_id: null;
  payment_link_id: null;
  customer_data: CustomerData;
  bill_id: null;
  taxes: any[];
  tip_in_cents: null;
}

export interface CustomerData {
  legal_id: string;
  full_name: string;
  phone_number: string;
  legal_id_type: string;
}

export interface PaymentMethod {
  type: string;
  extra: Extra;
  installments: number;
}

export interface Extra {
  bin: string;
  name: string;
  brand: string;
  exp_year: string;
  card_type: string;
  exp_month: string;
  last_four: string;
  card_holder: string;
  is_three_ds: boolean;
}

export interface ShippingAddress {
  address_line_1: string;
  address_line_2: string;
  country: string;
  region: string;
  city: string;
  name: string;
  phone_number: string;
  postal_code: string;
}

export interface Meta {}
