// get message from browser on stdin

const nativeMessaging = require('chrome-native-messaging')

process.stdin
  .pipe(new nativeMessaging.Input())
  .pipe(new nativeMessaging.Transform((message, push, done) => {
    // ...
  }))
  .pipe(new nativeMessaging.Output())
  .pipe(process.stdout)
