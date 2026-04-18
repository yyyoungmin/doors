// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          width: '100%',
            height: '100%',
          videoId: 'nW_Lo4xkZ50'
           playerVars: {
  playsinline: 1,
  autoplay: true,
  mute: 1,
  loop: 1,
  playlist: 'nW_Lo4xkZ50'
}
          },
          events: {
            
          }
        });
      }
