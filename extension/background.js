chrome.runtime.onMessage.addListener(handleMessage)

function handleMessage(message, sender, sendResponse) {
  console.log('received message', message, 'from', sender)
  chrome.runtime.sendNativeMessage('com.doctolib.simplenotify', message)
}
