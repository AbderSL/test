function hqtvx(url){if(Hls.isSupported()) {var video = document.getElementById('hqtvx'); video.volume = 0.2; var hls = new Hls(); var hqtvxcom = decodeURIComponent(url)
hls.loadSource(hqtvxcom); hls.attachMedia(video); hls.on(Hls.Events.MANIFEST_PARSED,function() {video.play();}); document.title = url}}
hqtvx ("http://siyatv.herokuapp.com/https://shls-mbc3-prod.shahid.net/mbc3-prod_5.m3u8");