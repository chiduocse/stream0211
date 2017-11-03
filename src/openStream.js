function openStream() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(stream => {
            const video = document.getElementById('localStream');
            video.srcObject = stream;
            video.onloadedmetadata = function () {
                video.play();
            }
        })
        .catch(error => console.log(error));
}

module.exports= openStream;