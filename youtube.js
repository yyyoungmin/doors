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
          videoId: 'p7-ndhZgrOE'
           playerVars: {
  playsinline: 1,
  autoplay: 1,
  mute: 1,
  loop: 1,
  playlist: 'p7-ndhZgrOE'
}
          },
          events: {
            
          }
        });
      }
