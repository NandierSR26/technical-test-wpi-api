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
    const request = context.switchToHttp().getRequest();
    if (!request.body) return next.handle();

    const encSignature = from(encryptSignature(request.body.signature));
    request.body.signature = encSignature;

    return encSignature.pipe(
      switchMap((signature) => {
        request.body.signature = signature;
        return next.handle();
      }),
    );
  }
}
