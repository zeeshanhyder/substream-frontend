import Script from 'next/script'

export const YoutubeScript = ({ videoId }: { videoId: string }) => {
    return (
        <Script id="yt-script">
            {`
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                document.getElementById('mute-toggle-button').style.opacity = '0';

                window.player;
                function onYouTubeIframeAPIReady() {
                    window.player = new YT.Player('player', {
                        videoId: '${videoId}',
                        height: '100%',
                        width: '100%',
                        playerVars: {
                            'playsinline': 1,
                            'controls': 0,
                            'showinfo': 0,
                            'rel': 0,
                            'modestbranding': 1,
                            origin: window.location.origin,
                        },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }

                function onPlayerReady(event) {
                    setTimeout(() => {
                        event.target.mute();
                        event.target.playVideo();
                        setTimeout(() => {
                            if(window.player.getPlayerState() == YT.PlayerState.PLAYING) {
                                document.getElementById('backdrop-image').style.opacity = '0';
                                document.getElementById('mute-toggle-button').style.opacity = '1';
                            }
                        }, 1500);
                    }, 1500);
                }

                var done = false;
                function onPlayerStateChange(event) {
                    if (event.data == YT.PlayerState.ENDED) {
                        document.getElementById('player').style.opacity = '0';
                        document.getElementById('backdrop-image').style.opacity = '1';
                        document.getElementById('mute-toggle-button').style.opacity = '0';
                    }
                    
                    if(event.data == YT.PlayerState.PLAYING) {
                        document.getElementById('mute-toggle-button').style.opacity = '1';
                    }
                }

                function stopVideo() {
                    window.player.stopVideo();
                }
            `}
        </Script>
    )
}
