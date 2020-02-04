// load libsimplenotify

const { Library } = require('ffi')

const libsimplenotify = Library('./libsimplenotify.so', {
  show_notification: ['int', ['string']],
})

// get message from browser on stdin

const nativeMessaging = require('chrome-native-messaging')

process.stdin
  .pipe(new nativeMessaging.Input())
  .pipe(new nativeMessaging.Transform((message, push, done) => {
    if (message.action === 'notify') {
      libsimplenotify.show_notification(message.text)
    done()
  }))
  .pipe(new nativeMessaging.Output())
  .pipe(process.stdout)
