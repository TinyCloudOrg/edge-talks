# Stylus 101 Summary

## Overview
Watch presentation [here](https://streameth.org/edge_city/watch?session=6729ef22f861dff0956b51aa)

## Summary
Derek Lee from Offchain Labs presented an introduction to Stylus, a new upgrade to Arbitrum chains that adds support for WebAssembly (WASM) smart contracts alongside the existing Ethereum Virtual Machine (EVM). Stylus enables developers to write smart contracts in languages like Rust, C/C++, and others that can compile to WASM bytecode.

The key innovation is integrating a WASM virtual machine into the existing Arbitrum chain, allowing multi-VM support with both EVM and WASM contracts running on the same chain. This approach aims to leverage the larger pool of Rust, C/C++ developers and tap into their ecosystems' mature tooling and libraries.

Stylus contracts are fully interoperable with EVM contracts, sharing the same Solidity ABI and secured by Arbitrum's fraud proof system. Projects like Renegade (dark pool exchanges) and FairBlock (NPC use cases) are already building on Stylus. Performance benefits include faster execution, better memory efficiency, and native re-entrancy protection.

The presentation covered implementation specifics, such as Offchain Labs' fork of the Wasmer WASM compiler, use of Alloy RS for EVM compatibility, and tooling like the Rust SDK, Cargo Stylus for deployment, and integration with frameworks like OpenZeppelin.

## Key Takeaways
- Stylus brings WASM VM capabilities to existing Arbitrum chains, enabling multi-VM support alongside EVM
- Allows smart contract development in Rust, C/C++, and other languages that compile to WASM
- Fully interoperable with EVM contracts, shares Solidity ABI, secured by Arbitrum fraud proofs
- Offers performance benefits like faster execution, better memory usage, re-entrancy protection
- Leverages larger developer pool and tooling from Rust/C/C++ ecosystems
- Live on Arbitrum mainnet, Nova chains, with tooling like Rust SDK and Cargo Stylus
- Projects like Renegade, FairBlock are early adopters building on Stylus
- Potential to onboard more Web2 developers into Web3 using familiar languages

## Speakers
- Derek Lee
- Role: Developer Relations at Offchain Labs
- Expertise: Arbitrum, Stylus, Developer tooling
- Key Contributions: Presented Stylus overview, implementation details, project examples
- Audience Members
- Roles: Developers, Project Managers
- Expertise: Smart contract development, Web3, Innovation
- Key Contributions: Asked questions on cross-chain compatibility, onboarding new developers, governance engagement

