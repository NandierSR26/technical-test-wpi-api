import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { from, Observable, switchMap } from 'rxjs';
import { encryptSignature } from 'src/utils/encrypt-signature';

@Injectable()
export class IntegritySignatureInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let integritySignarure = '';
    const request = context.switchToHttp().getRequest();
    if (!request.body) return next.handle();

    const { reference, amount_in_cents, currency } = request.body;

    integritySignarure =
      reference +
      amount_in_cents +
      currency +
      process.env.INTEGRITY_KEY_WOMPI_SANDBOX;

    const encSignature = from(encryptSignature(integritySignarure));
    request.body.signature = encSignature;

    return encSignature.pipe(
      switchMap((signature) => {
        request.body.signature = signature;
        return next.handle();
      }),
    );
  }
}
