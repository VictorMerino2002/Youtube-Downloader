import { downloadVideo, downloadAudio } from "./downloadContent.js"
import express from 'express'
import { sendFile } from "./sendFile.js"
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express()
app.get('/video', (req,res) => {
    const {id} = req.query
    downloadVideo(id)
      .then(filePath => sendFile(res,filePath))
})

app.get('/audio', (req,res) => {
  const {id} = req.query
  downloadAudio(id)
    .then(filePath => sendFile(res,filePath))
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
})