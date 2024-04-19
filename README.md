# Youtube-Downloader-API

Youtube-Downloader-API is a node-js opensource code for download the video or the audio of a Youtube video.

## How to use
To download the content of a video you need de video ID:
```
https://www.youtube.com/watch?v=jNQXAC9IVRw ---> **jNQXAC9IVRw **
```
Once you have de ID, use the route "/video" or "/audio" depending of what u need and write "?id=" and paste the video ID :

### Video:
```
127.0.0.1:3000/video?id=jNQXAC9IVRw
```
### Audio only:
```
127.0.0.1:3000/audio?id=jNQXAC9IVRw
```
