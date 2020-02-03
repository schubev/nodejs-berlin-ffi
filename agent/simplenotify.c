#include <stdio.h>
#include <stdlib.h>

#include <libnotify/notification.h>
#include <libnotify/notify.h>

int show_notification(const char *body) {
  if (notify_init("Native messaging dummy agent") == FALSE) {
    fprintf(stderr, "failed to initialize libnotify\n");
    return -1;
  }
  NotifyNotification *notification =
      notify_notification_new("I got run!", body, NULL);
  notify_notification_set_timeout(notification, NOTIFY_EXPIRES_DEFAULT);
  GError *error = NULL;
  if (notify_notification_show(notification, &error) == FALSE) {
    fprintf(stderr, "failed to show notification\n");
    return -2;
  }
  notify_uninit();
  return 0;
}
