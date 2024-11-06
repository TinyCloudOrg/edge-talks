# How digital wallets can improve social interactions both online and offline?  Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/2cfdnyuqxdpaylh2/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/2cfdnyuqxdpaylh2/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch panel [at StreamETH](https://streameth.org/edge_city/watch?session=6728dcbaf861dff095114f65)

## Summary
This panel discussion between Dan Finlay of MetaMask and Jeff Doyle of Flow Blockchain covered innovations around granular access control and authorization for blockchain wallets and applications. 

The core concepts were MetaMask's delegation framework, allowing counterfactual/off-chain approvals with readable policies, and Flow's capability system for granting access to specific on-chain resources and functions. These aim to improve upon simplistic token approval models and enable more nuanced, user-controlled access delegation.

Key challenges discussed included designing intuitive user interfaces for managing complex authorizations, defining appropriate boundaries for resources, and evolving wallets into extensible platforms aligning with Web3's permissionless nature. Early integration experiments with these models in MetaMask and Flow Wallet were highlighted.

The potential for wallets to serve as Web3's "operating system" - an extensible base for accessing decentralized applications and managing on/off-chain assets - was explored. Novel authorization models could enable new classes of assets and interfaces beyond just tokens and NFTs.

## Key Takeaways
- Granular, user-controlled authorization for blockchain resources is key to enabling safe consumer adoption
- Wallets should evolve into extensible platforms mirroring Web3's permissionless qualities
- UI/UX design is critical for translating complex authorization models into intuitive experiences
- Defining "appropriate boundaries" for resources/assets users can delegate is an open challenge
- Wallets may eventually replace operating systems as Web3's application/resource management layer
- New asset types beyond tokens/NFTs emerge as wallets integrate authorization/delegation primitives
- Early experiments with delegation (MetaMask) and capabilities (Flow) are promising stepping stones

## Speakers
- Dan Finlay
- Founder of MetaMask wallet
- Expertise in user interfaces and extensible software platforms
- Key contributor to the MetaMask delegation framework
- Jeff Doyle
- Works on Flow Wallet at Flow Blockchain
- Expertise in consumer blockchain applications
- Lead on integrating Flow's capability system in Flow Wallet

