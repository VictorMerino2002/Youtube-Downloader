import fs from 'node:fs'
import ytdl from 'ytdl-core'
import { randomUUID } from 'node:crypto'

export async function downloadVideo(videoID) {

  const fileName = 'ytvideo'+randomUUID()

  const filePath = './output/'+fileName+".mp4"

  await new Promise((resolve, reject) => {
    const stream = ytdl(videoID).pipe(fs.createWriteStream(filePath))
    stream.on('finish', resolve)
    stream.on('error', reject)
  })

  return filePath    
}

export async function downloadAudio(videoID) {
  const fileName = 'ytaudio'+randomUUID()

  const filePath = './output/'+fileName+".mp3"

  await new Promise((resolve, reject) => {
    const stream = ytdl(videoID, { filter: format => format.hasVideo === false }).pipe(fs.createWriteStream(filePath))
    stream.on('finish', resolve)
    stream.on('error', reject)
  })

  return filePath
}