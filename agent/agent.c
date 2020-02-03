#include <stdio.h>
#include <stdlib.h>

#include <libnotify/notification.h>
#include <libnotify/notify.h>

int main(void) {
  if (notify_init("Native messaging dummy agent") == FALSE) {
    fprintf(stderr, "failed to initialize libnotify\n");
    return EXIT_FAILURE;
  }
  NotifyNotification *notification =
      notify_notification_new("I got run!", NULL, NULL);
  notify_notification_set_timeout(notification, NOTIFY_EXPIRES_DEFAULT);
  GError *error = NULL;
  notify_notification_show(notification, &error);
  notify_uninit();
}
