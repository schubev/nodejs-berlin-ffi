const { Library } = require('ffi')

const libsimplenotify = Library('./libsimplenotify.so', {
  show_notification: ['int', ['string']],
})

libsimplenotify.show_notification('This message comes from the web page.')
