const fetch = require('node-fetch')

function searchWsb(stockTicker) {
  fetch('https://www.reddit.com/r/wallstreetbets.json')
  .then((resp) => resp.json())
  .then((wsbData) => {
    const topPostUrl = wsbData.data.children[0].data.url + '.json'
    fetch(topPostUrl)
    .then((resp) => resp.json())
    .then((topPostData) => {
      console.log(topPostData[1].data.children);
    });
  })
}

function wsbTopPostComments() {
  return fetch('https://www.reddit.com/r/wallstreetbets.json')
    .then((resp) => resp.json())
    .then((wsbData) => {
      const topPostUrl = wsbData.data.children[0].data.url + '.json'
      return fetch(topPostUrl)
        .then((resp) => resp.json())
        .then((topPostData) => {
          return topPostData[1].data.children.map((child) => {
            return child.data
          })
        });
    })
}

exports.wsbTopPostComments = wsbTopPostComments