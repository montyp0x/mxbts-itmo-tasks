import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

export const SEPOLIA_RPC = `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_API_KEY as string}`;
export const SEPOLIA_ENDPOINT = "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1";
export const SEPOLIA_CHAINID = 10161;

export const LINK_ETH_FEED = "0x42585eD362B3f1BCa95c640FdFf35Ef899212734";
export const ETH_USD_FEED = "0x694AA1769357215DE4FAC081bf1f309aDC325306";



const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: [process.env.METAMASK_PRIVATE_KEY as string],
    }
  }
};

export default config;
