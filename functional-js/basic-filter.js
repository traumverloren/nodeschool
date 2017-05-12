function getShortMessages(messages) {
  return messages.map((item) => item.message)
                 .filter((msg) => msg.length < 50);
}

module.exports = getShortMessages
