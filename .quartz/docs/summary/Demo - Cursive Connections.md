# Demo - Cursive Connections Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/c94cotu67uy05vb4/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/c94cotu67uy05vb4/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch demo [at StreamETH](https://streameth.org/edge_city/watch?session=670ca3702f3849fecfbaa706)

## Summary
Cursive Connections is an app that leverages advanced cryptography to enable privacy-preserving sharing of personal data and facilitate meaningful connections between people. The core technology involves multi-party computation, homomorphic encryption, and private set intersection, which allow users to selectively reveal information and discover shared interests and contacts in a secure manner.

The demo showcased the app's current features, including sharing social media profiles, attaching notes to contacts, and discovering overlapping interests through private set intersection. Upcoming additions include a visual "flower garden" representing connections, data import from other platforms, profile editing, and support for "narrowcasting" (targeted sharing), "super connectors" (recommending compatible connections), and "digital pheromones" (serendipitous synergies).

The app aims to solve inefficiencies in communication and coordination by enabling more relevant and efficient information sharing within communities like Edge City. It addresses privacy concerns by giving users control over what data they reveal and to whom. The team is focused on developing user-friendly interfaces for complex cryptographic operations and ensuring scalability as the app evolves.

## Key Takeaways
- Cursive Connections leverages advanced cryptographic techniques like multi-party computation, homomorphic encryption, and private set intersection to enable privacy-preserving sharing of personal data
- The app currently supports sharing social media profiles, attaching notes to contacts, and discovering shared interests through private set intersection
- Planned features include data import from other platforms, profile editing, visual representation of connections, "narrowcasting" (targeted sharing), "super connectors" (recommending compatible connections), and "digital pheromones" (serendipitous synergies)
- The app aims to improve communication and coordination within communities by enabling more relevant and efficient information sharing while addressing privacy concerns
- The team is focused on developing user-friendly interfaces for complex cryptographic operations and ensuring scalability as the app evolves
- The app is being tested and demonstrated at the Edge City event, allowing for real-world implementation and feedback
- Successful implementation could enable new paradigms for privacy-preserving data sharing and facilitate more meaningful connections within communities

## Speakers
- Vivek (Presenter)
- Role: Representing a 5-person team from Cursive (a research and design lab)
- Expertise: Cryptography for human connection, privacy-preserving data sharing
- Key Contributions: Introducing Cursive Connections, explaining the technology, and outlining current and planned features
- Rachel, Tessa, Stephen (Team Members)
- Roles: Part of the Cursive team developing the app
- Expertise: Likely in areas related to cryptography, user experience, and app development
- Key Contributions: Involved in the development and implementation of Cursive Connections
- Andrew (Team Member, not present)
- Role: Part of the Cursive team developing the app
- Expertise: Likely in areas related to cryptography, user experience, and app development
- Key Contributions: Involved in the development and implementation of Cursive Connections

