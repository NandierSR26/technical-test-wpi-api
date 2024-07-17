import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { ProductsService } from 'src/products/products.service';
import { TransactionsService } from 'src/transactions/transactions.service';

@Injectable()
export class ValidateFieldsInDbPipe implements PipeTransform {
  constructor(
    private readonly customersService: CustomersService,
    private readonly transactionsService: TransactionsService,
    private readonly productsService: ProductsService,
  ) {}

  async transform(value: any) {
    const { customer, transaction, product } = value;
    const errors: string[] = [];

    const customerDb = await this.customersService.findOne(customer);
    const transactionDb = await this.transactionsService.findOne(transaction);
    const productDb = await this.productsService.findOne(product);

    console.log({ customerDb, transactionDb, productDb });

    if (!customerDb) errors.push('customer not found');
    if (!transactionDb) errors.push('transaction not found');
    if (!productDb) errors.push('product not found');

    if (errors.length) throw new NotFoundException({ errors });

    return value;
  }
}
