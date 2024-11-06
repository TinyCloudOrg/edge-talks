# Olas Protocol Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/c9cb0znqgmymz0df/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/c9cb0znqgmymz0df/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=670f9f0950c4a85480e60eb7)

## Summary
- The Olus protocol aims to create a decentralized information publishing platform to address the crisis in traditional news media driven by declining ad revenues, clickbait, and media consolidation.
- It proposes using crypto-economic mechanisms like quadratic funding, prediction markets, reputation systems, and decentralized identities to enable a self-sustaining, high-quality information ecosystem.
- Writers receive funding through quadratic funding and micropayments, while content quality is evaluated through novel market mechanisms like Bayesian Truth Serum.
- For opinion pieces, Olus is building a proof-of-concept using Bayesian Truth Serum, where respondents predict both their own answer and the consensus answer to multiple-choice questions about the content.
- The protocol aims to realign incentives for truthful information without centralized control or private interests distorting content.
- While still a work-in-progress, Olus demonstrates novel integration of crypto primitives to create a decentralized, market-driven media platform.

## Key Takeaways
- Combines quadratic funding, prediction markets, reputation systems, and decentralized identities to incentivize high-quality information
- Novel use of Bayesian Truth Serum for evaluating truthfulness of opinions/subjective content
- Aims to realign incentives and remove private interests distorting media
- Creating proof-of-concept for evaluating opinion pieces, with demo expected
- If successful, could enable a self-sustaining decentralized media ecosystem
- Key challenge is bootstrapping network effects and adoption

## Speakers
- Chris (Speaker A)
- Junior blockchain developer from Ireland
- Part of team building Olus protocol
- Expertise in decentralized media, crypto-economic mechanisms
- Presented core concepts and current proof-of-concept work

