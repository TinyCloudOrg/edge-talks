# ZK-SXG - A simple data disclosure protocol Summary

## Video
<video id="video" controls></video>
<script src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/a66cjzckf52rl7oh/index.m3u8"></script>
<script>
  var video = document.getElementById('video');
  var videoSrc = 'https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/a66cjzckf52rl7oh/index.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
</script>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=670fb2ef50c4a85480eb2850)

## Summary
Crema Labs, a blockchain research studio, presented a protocol called ZK-SXG (Zero-Knowledge Signed Exchange Gateways) that aims to bring verifiable web2 data onto blockchains like Ethereum. The core idea is to leverage technologies like TLS notary, SXDS (Signed Exchanges for Web Packages), and zero-knowledge proofs to selectively prove the authenticity of web data on-chain.

One use case presented is enabling users to prove ownership of assets (e.g., 10 BTC on Binance) and receive corresponding NFTs from projects without sharing sensitive information. The protocol generates zero-knowledge proofs from website data, allowing verification without revealing the full data on-chain, addressing gas cost and data size limitations.

Key challenges include generating proofs efficiently for large web pages, outsourcing proof computation, and designing incentive mechanisms for verifiers. The team demonstrated a proof-of-concept and plans to iterate on the protocol during their residency, aiming for real-world implementations that bridge web2 and web3 data.

## Key Takeaways
- ZK-SXG enables verifiable web2 data on blockchains through zero-knowledge proofs
- Leverages TLS notary, SXDS, and ZK techniques to prove data authenticity
- Allows selective proof of website data without revealing full information
- Addresses blockchain data size and cost limitations
- Enables use cases like proving asset ownership for NFT distribution
- Key challenges include proof generation, outsourcing, and incentive design
- Real-world implementation could bridge web2 and web3 data ecosystems
- Team aims to iterate on the protocol during the residency

## Speakers
- Yashant (Crema Labs)
- Role: Blockchain Researcher
- Expertise: Zero-knowledge proofs, blockchain protocols
- Key Contributions: Presented ZK-SXG protocol, use cases, and technical approach

