import express from 'express'
import { bingRouter } from './routers/bing-router'
import { googleRouter } from './routers/google-router'
import { yahooRouter } from './routers/yahoo-router'

const app = express()
const PORT = 4500

app.get('/', (req, res) => {
    res.send({ msg: 'Server is running' })
})

app.use('/bing', bingRouter)
app.use('/yahoo', yahooRouter)
app.use('/google', googleRouter)

app.listen(PORT, () => {
    console.log(`Application is running in port : ${PORT}`)
})