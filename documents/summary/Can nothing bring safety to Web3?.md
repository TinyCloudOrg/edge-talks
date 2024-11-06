# Can nothing bring safety to Web3?  Summary

## Video
<video controls>
<source src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/4f4fi9u8mnqab7ed/index.m3u8" type="application/x-mpegURL">
  Your browser does not support the video tag.
</video>

Watch presentation [at StreamETH](https://streameth.org/edge_city/watch?session=6728dc84f861dff095114edf)

## Summary
This was a presentation introducing the MetaMask Delegation Toolkit, a new framework that enables user-defined, granular permissions and authorizations for Web3 applications. The core innovation is "delegations" - signed data structures where an account encodes caveats/terms under which another account can take actions on its behalf. This separates authorization logic from smart contracts.

Key technical concepts include:

- Delegation data structures with caveats enforced by separate "enforcer" contracts
- Integration with proposals like EIP-4337 (account abstraction) and EIP-7715 (permission requests)
- Enabling new capabilities like counterfactual accounts, multi-hop delegations, and "pull-based" payments

The framework aims to solve major Web3 usability issues around requiring crypto wallets, dealing with transaction confirmations, and safely granting permissions. It enables new seamless onboarding experiences and collaborative use cases.

Notable demonstrations included the "Red Balloon" treasure hunt game where players cooperated by sharing delegations, as well as integrations with collaboration tools like Discord bots.

Specific implementation details were covered, including code examples for creating delegations, deploying accounts, and redeeming delegations using the MetaMask Delegation SDK.

## Key Takeaways
- The MetaMask Delegation Toolkit introduces signed "delegations" as a new paradigm for granting granular, user-defined permissions in Web3 apps without confirmations.
- It separates authorization logic from smart contracts using customizable "enforcer" contracts that validate caveats encoded in delegations.
- Integrates with key proposals like EIP-4337 (account abstraction) and EIP-7715 (permission requests) to enable new Web3 capabilities.
- Enables seamless onboarding to Web3 apps, collaborative use cases like DAOs/social recovery, AI permissions management, and new Web3 payment models.
- Provides open source SDKs and tools for developers to build applications using the delegation framework.
- Experimental implementations like the "Red Balloon" game demonstrate the potential for novel, collaborative Web3 experiences.

## Speakers
- Dan Finlay (Founder, MetaMask)
- Presented the core MetaMask Delegation Toolkit concepts and architecture
- Demonstrated key use cases and implementations
- Expertise in Web3 usability, security, and scalability challenges
- Jeff Lau (MetaMask)
- Walked through code examples using the MetaMask Delegation SDK
- Explained developer setup and integration steps
- Expertise in Web3 application development

