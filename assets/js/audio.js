const audio = document.getElementById('player');
const audioVolume = document.getElementById('volume-control');

audioVolume.addEventListener("change", function(e) {
    audio.volume = this.value/10;
})