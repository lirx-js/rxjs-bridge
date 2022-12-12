import { Observable, Subscriber } from 'rxjs';
import { defaultNotificationObserver, futureUnsubscribe, IDefaultNotificationsUnion, IObservable, IUnsubscribe } from '@lirx/core';

export function toRxJS<GValue>(
  subscribe: IObservable<IDefaultNotificationsUnion<GValue>>,
): Observable<GValue> {
  return new Observable<GValue>((subscriber: Subscriber<GValue>): IUnsubscribe => {
    return futureUnsubscribe((
      unsubscribe: IUnsubscribe,
    ): IUnsubscribe => {
      return subscribe(
        defaultNotificationObserver<GValue>(
          /* next */(value: GValue): void => {
            subscriber.next(value);
          },
          /* complete */(): void => {
            subscriber.complete();
            unsubscribe();
          },
          /* error */(error: unknown): void => {
            subscriber.error(error);
            unsubscribe();
          },
        ),
      );
    });
  });
}


