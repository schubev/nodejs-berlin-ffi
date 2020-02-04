console.log('content script loaded!')

const button = document.getElementById('notify-send')
const input = document.getElementById('notify-text')

button.addEventListener('click', event => {
  const action = 'notify'
  const text = input.value
  chrome.runtime.sendMessage({ action, text })
})
