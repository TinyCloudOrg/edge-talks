# Community Demo Day #3 Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/334cfxssn93gllbh/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/334cfxssn93gllbh/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=67208d6424af22d0ca414bd1)

## Summary
- A community "demo day" event at Edge City Lanna, a popup village focused on accelerating human flourishing through technology and social innovation.
- Presenters showcased projects spanning decentralized governance tools, 3D virtual worlds, breathwork applications, video games, community building initiatives, and more innovative ideas.
- Key problems addressed included lack of transparency in legal entities, difficulty connecting at events, disconnect between wellness and tech, funding public goods, and urban design issues.
- Notable solutions proposed included blockchain for legally binding agreements, NFC social discovery, AI content creation, verifiable email proofs, decentralized lotteries, and location-based matching.
- Many presenters highlighted upcoming demos, events, and real-world implementations of their work.
- Technical challenges discussed included scaling, privacy, user experience, and integration requirements.
- A few presenters shared early prototypes, new features in development, and preliminary results.

## Key Takeaways
- Blockchain technology is enabling new models for legal entities, funding commitments, verifiable information sharing, and transparent public goods funding
- Virtual worlds and AI-assisted tools are lowering barriers for creativity, self-expression, and project collaboration
- Mindfulness/wellness applications are exploring ways to harmoniously integrate technology to enhance human flourishing
- Community-driven urban design interventions can improve shared spaces through participatory processes
- Location-aware social apps can help maintain connections and coordinate in-person meetups
- Experimental events and demos allow rapid testing of innovative concepts in real-world contexts
- Privacy-preserving solutions are critical for sensitive use cases like whistleblowing and personal data sharing
- Combining different emerging technologies can produce powerful synergies for tackling complex challenges

## Speakers
- Dan Finlay (MetaMask) - Presented Propel, a delegation framework for credible funding commitments using NFTs
- Justin Mullilo (Mona) - Showcased a 3D virtual world platform for creators and immersive experiences
- Sam (RegistryChain) - Demonstrated a blockchain-based platform for legally forming and managing entities
- Yush (ZK Email) - Presented verifiable email proofs enabling on-chain actions like whistleblowing
- Jack - Discussed using AI tools and replit to accelerate project building, especially for non-technical users
- Rod (Lunar Colony) - Shared an open-source collaborative platform for space mission engineering
- Rizo - Explained how to receive Ethereum payments directly to any web domain via ENS
- Vivek (Cursive) - Demoed an NFC social app for discovering common contexts and tracking community metrics
- Lucy (Vana) - Pitched a breathwork/wellness platform connecting experts and practitioners
- Andre O'Shea - Previewed a new isometric shooter video game called Drift Nomad
- Inara - Discussed an upcoming experiential art show in Berlin exploring human/AI creativity
- Nico (Lotto.pgf) - Introduced a protocol for creating verifiable and transparent blockchain lotteries to fund public goods
- Oli (SpaceTime) - Presented a friend location-matching app to coordinate meetups while traveling
- Abu - Shared urban analysis identifying needs for a new community park/green space

