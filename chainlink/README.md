# Ethereum Node Connection and Price Feeds Monitoring

## Task Overview

The primary task involves connecting to an Ethereum node to monitor the transfer of specific token pairs: USD/ETH, and LINK/ETH from Chainlink. This project requires registration for free access to an Ethereum archive node through the Alchemy service and monitoring for new price change events for specified token pairs using Chainlink oracle feeds.

### Specific Goals

1. Connect to an Ethereum Node: Establish a connection to an Ethereum node. Free access to an archive node on Ethereum can be obtained through Alchemy.
2. Monitor Token Pairs: The pairs to be monitored include ETH/USD, LINK/ETH, and USDT/ETH.
3. Implement a Monitor: Develop a monitoring system that:
    - Continuously monitors the latest blocks on the Ethereum blockchain.
    - Logs all new price change events related to the specified token pairs.

## Getting Started

### Requirements

- An Alchemy account for accessing Ethereum archive nodes.
- Knowledge of Ethereum nodes and how to connect to them.
- Familiarity with Chainlink oracle feeds for retrieving data on token pairs.

### Steps

1. Register on Alchemy: Sign up for an account at [Alchemy](https://alchemy.com) to get free access to an Ethereum archive node.
2. Find Oracle Feeds: Locate the Chainlink oracle feeds for the token pairs ETH/USD, LINK/ETH, and USDT/ETH.
3. Monitor Implementation:
    - Write a script or a small application that continuously monitors the Ethereum blockchain's latest blocks.
    - Ensure the monitor logs all detected new price change events for the specified token pairs.

## Log Output

Please find below an example log output that monitor generates: