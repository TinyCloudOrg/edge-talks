# Demo - OHM Wisdom Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/51e5f8031wqqd1wa/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/51e5f8031wqqd1wa/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=670ca48d2f3849fecfbaf643)

## Summary
The presentation introduces a novel framework called "Wisdom" that aims to quantify the relative value of diverse contributions within a community and incentivize engagement. The core idea is to have community members record and review contributions across multiple dimensions through pairwise comparisons. Reviews themselves are treated as valuable contributions and undergo a meta-review process. This generates a dataset that allows fitting a baseline function to automatically calculate the value of any contribution to the community in a multidimensional way.

The key innovation is the meta-review process where reviews are themselves reviewed, creating an incentive loop to engage more people. Participants earn tokens for each review, providing a direct incentive and gamification element. The multidimensional valuation enables automated reward mechanisms and reputation scores for governance.

The system has been prototyped in the context of festivals and open science conferences. Early experiments have demonstrated its applicability across different domains. An MVP is currently being designed with plans for a larger deployment at a major metascience conference next year.

Key challenges include designing effective interfaces, managing an international developer community, leveraging blockchain/graph database technologies, and scaling the system to handle larger communities and contribution volumes.

## Key Takeaways
- Wisdom is a novel framework for quantifying the value of diverse contributions within a community through meta-reviewing
- It creates an incentive loop by treating reviews as valuable contributions themselves
- Participants earn tokens for reviews, gamifying the process
- Enables multidimensional valuation of contributions and automated reward/reputation mechanisms
- Has been prototyped successfully in festival and academic settings
- An MVP is being developed targeting deployment at a major metascience conference
- Key challenges include interface design, developer community management, and leveraging blockchain/graph database technologies
- Presents an innovative approach to incentivizing engagement and distributed value accounting within communities

## Speakers
- Speaker A
- Role: Presenter/Researcher
- Expertise: Decentralized value accounting, community incentive design
- Key Contributions: Introduced the Wisdom framework, shared prototyping experiences, outlined future development plans

