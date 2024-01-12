const express = require('express')
const app = express()
const port = 3000
const fingerPrintJS = require('@fingerprintjs/fingerprintjs-pro-server-api')


// import {
//   FingerprintJsServerApiClient,
//   Region,
// } from '@fingerprintjs/fingerprintjs-pro-server-api'


const client = new fingerPrintJS.FingerprintJsServerApiClient({
  apiKey: 'Hvcwcogz7cl4h1yvmDrA',
  region: fingerPrintJS.Region.AP,
})

// Get visit history of a specific visitor
// client.getVisitorHistory('<visitorId>').then((visitorHistory) => {
//   console.log(visitorHistory)
// }).catch((err)=> {
//   console.log(err)
// })

// Get a specific identification event
// client.getEvent('<requestId>').then((event) => {
//   console.log(event).catch((err)=> {
//     console.log(err)
//   })
// })


app.get('/', (req, res) => {
  // Get visit history of a specific visitor
  client.getVisitorHistory('<visitorId>').then((visitorHistory) => {
    console.log(visitorHistory.visitorId)
    console.log(visitorHistory.visits)
    console.log(visitorHistory.lastTimestamp)
    // console.log(visitorHistory.visitorId,visitorHistory.visits, visitorHistory.lastTimestamp)
  }).catch((err)=> {
    console.log(err)
  })

  // Get a specific identification event
  // client.getEvent('<requestId>').then((event) => {
  //   console.log(event)
  // })

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})