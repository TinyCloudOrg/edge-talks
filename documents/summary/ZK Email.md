# ZK Email Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/be618n77fdhytfza/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/be618n77fdhytfza/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=670fabd550c4a85480ea340a)

## Summary
The presentation discusses ZK Email (ZKE), a platform that enables zero-knowledge proofs for email interactions. Key features include:

- A registry for easily defining new ZK proof patterns for email interactions in 2 minutes
- Automatic creation of ZK proofs that allow verifying email send/receive while keeping content private
- Demo of a QR code proving a rejected Devcon talk, granting access to a partner event
- Redesigned website and production deployment
- Solidity library for seamlessly integrating ZKE proofs into smart contracts
- Exploration of decentralized "Sign in with Google" using JWT keys
- Account recovery product for adding email-based guardians to wallets like Klave and Safe
- Collaboration with Noir team for faster client-side proofs
- Plans to conduct a workshop on defining new ZKE proofs

The core innovation is using zero-knowledge proofs to enable private and verifiable email interactions, with applications in authentication, account recovery, and smart contract integrations. A key focus is making ZKE easily accessible through developer tools and seamless user experiences.

## Key Takeaways
- ZK Email enables private and verifiable email interactions using zero-knowledge proofs
- Simple registry for defining new ZK proof patterns for email in 2 minutes
- Integration with Solidity for seamless smart contract use of ZKE proofs
- Exploring decentralized "Sign in with Google" using JWT keys and ZK proofs
- Account recovery product using email-based guardians for wallets like Klave and Safe
- Collaborating with Noir for faster client-side ZK proofs
- Conducting workshop on defining custom ZKE proof patterns
- Focus on developer tools and seamless user experiences for ZKE adoption

## Speakers
- Speaker A
- Role: Works on ZK Email
- Expertise: Zero-knowledge proofs, email privacy, smart contract integration
- Key Contributions: Presented ZKE features, demos, roadmap

