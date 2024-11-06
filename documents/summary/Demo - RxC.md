# Demo - RxC Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/992ba2v8yudlg27d/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/992ba2v8yudlg27d/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch demo [at StreamETH](https://streameth.org/edge_city/watch?session=670ca05d2f3849fecfba1428)

## Summary
- The demonstration is about an experimental community currency system called "EDGES" implemented at Edge City Lanna as a social experiment to foster community engagement.
- The core problem addressed is how traditional money systems, acting as universal units of account, can erode local community connections by prioritizing global supply/demand over local needs.
- Two key concepts are introduced: 1) Mutual Trust - participants contribute a small amount to join and can withdraw more, building trust within the community. 2) Exit Taxes - friction is added when moving value out of the system to maintain a semi-closed economy.
- The goal is to create a currency system that captures the coordination benefits of money while strengthening local community bonds and context.
- Participants can join EDGES through a trust ritual and an initial 100 EDGES currency allocation. The system's rules are malleable based on community feedback.
- While technical details are limited, the focus is on exploring novel social dynamics and incentive structures around community-driven economic models.

## Key Takeaways
- EDGES is an experimental community currency aiming to build trusted local economies without eroding social cohesion
- Uses mutual trust buy-in and exit friction to maintain a semi-closed, community-focused value system
- Rules are iterative and open to participant input to find optimal governance model
- Success hinges on fostering collective understanding of empowering the community over individuals
- Offers a sandbox to explore novel economic and social dynamics around localized value exchange
- Potential to scale by replicating the model in other communities if proven effective

## Speakers
- Matt (Speaker A)
- Role: Founder/Lead of Radical Exchange (Project behind EDGES)
- Expertise: Community currency design, economic anthropology, alternative governance models
- Key Contributions: Introduced core concepts of EDGES system, mutual trust mechanism, exit taxes; Invited participation and iteration

