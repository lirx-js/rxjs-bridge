import {
  createErrorNotification,
  createNextNotification,
  IDefaultNotificationsUnion,
  IObservable,
  IObserver,
  IUnsubscribe,
  STATIC_COMPLETE_NOTIFICATION,
} from '@lirx/core';
import { Observable, Subscription } from 'rxjs';

export function fromRxJS<GValue>(
  observable: Observable<GValue>,
): IObservable<IDefaultNotificationsUnion<GValue>> {
  return (emit: IObserver<IDefaultNotificationsUnion<GValue>>): IUnsubscribe => {
    let running: boolean = true;

    const subscription: Subscription = observable.subscribe({
      next: (value: GValue): void => {
        emit(createNextNotification(value));
      },
      complete: (): void => {
        emit(STATIC_COMPLETE_NOTIFICATION);
      },
      error: (error: unknown): void => {
        emit(createErrorNotification(error));
      },
    });

    return (): void => {
      if (running) {
        running = false;
        subscription.unsubscribe();
      }
    };
  };
}


