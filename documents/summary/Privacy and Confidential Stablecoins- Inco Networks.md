# Privacy and Confidential Stablecoins- Inco Networks Summary

## Video
<video controls>
<source src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/5e64qsj1gsh4532x/index.m3u8" type="application/x-mpegURL">
  Your browser does not support the video tag.
</video>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=6724e224f861dff0952556f9)

## Summary
Blockchain transparency enables key features like payment verification and composability, but privacy is also needed for businesses and individuals. This presentation introduces a "confidential ERC20" token using fully homomorphic encryption (FHE) to encrypt token balances and transfer amounts while keeping transactions on-chain. 

The core innovation allows programming decryption policies to enable authorized viewing for compliance, such as letting auditors or regulators view transactions without giving full access. Transfer rules can also be programmed, e.g. only allowing transfers if identity credentials are met.

FHE allows computing directly on encrypted data, enabling private transactions without breaking transparency. The TFHE scheme used supports unlimited operations with precision, enabling complex defi use cases. Integrating with blockchains could use a co-processor model.

Key benefits include end-to-end privacy by transferring confidential amounts, composability with other protocols by working natively with ERC20s, and programmable compliance through viewing key delegation and custom transfer rules. Applications include private payments, trading, lending, and asset tokenization.

## Key Takeaways
- Introducing confidential ERC20 tokens using FHE to encrypt balances and transfer amounts while preserving on-chain transparency.
- Enabling programmable viewing policies to allow authorized parties to view transactions for compliance purposes.
- Programming transfer rules based on identity credentials or accreditation status.
- Providing end-to-end privacy by transferring confidential amounts into private DeFi protocols.
- Achieving composability by natively working with ERC20s to integrate with existing DeFi applications.
- Addressing use cases across private payments, trading, lending, and tokenization of real-world assets.
- Technical challenges exist around FHE performance, key management, ordering guarantees, and programmability constraints.

## Speakers
- Speaker A: Likely an Inco Networks founder, expertise in privacy and confidentiality solutions for blockchains. Key contributions framing the need for privacy balanced with compliance tooling.
- Speaker B: Remy (Inco Networks), expertise in technical architecture using FHE for blockchains. Key contributions explaining the FHE approach, confidential ERC20 design, and implementation details.
- Speaker C: In-house legal expert at Circle, explained how programmable decryption enables compliance while preserving privacy rights. Highlighted use cases across payments, trading, and asset issuance.
- Speaker D: Questioned applying the approach to cross-chain token transfers and swaps, highlighting composability challenges.
- Speaker E: Raised concerns around ordering and throughput when mixing confidential and plaintext transactions on shared infrastructure like DEXs.

