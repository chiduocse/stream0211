const playVideo = require('./playVideo');

function openStream() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(stream => playVideo(stream, 'localStream'))
        .catch(error => console.log(error));
}

module.exports = openStream;