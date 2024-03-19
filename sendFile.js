import fs from 'node:fs'

export function sendFile(res,filePath) {
    res.download(filePath, (err) => {
        if (err) console.log('Error al enviar la descarga: ', err)
        else fs.unlink(filePath, (err) => {if (err) console.log('Error al eliminar el archivo: ', err)})
    })
}