# File Hosting server

This is not a file uploading server, but you can use this application to download files from server. For file uploading server use nihalkudukkan/fileuploadmulter repository.

## server

Create "files" folder inside server folder if not there. use `npm start` to start the expresss application. The files you want to host should be added on files folder. The root `url: /` will be having necessary api information

## front end

Use `npm start` to start react application. Edit `proxy` in package.json according to your server url.
