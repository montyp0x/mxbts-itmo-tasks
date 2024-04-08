import { ethers } from "hardhat";
import { Signer, JsonRpcProvider } from "ethers";
import hardhat from "hardhat";
import { DataConsumer } from "../typechain-types"
import "dotenv/config";
import { SEPOLIA_RPC } from "../hardhat.config";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function main() {
    await hardhat.run("compile");

    const filename: string = "../.env";
    
    const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC);

    let owner: Signer;

    [owner] = await ethers.getSigners();

    const ownerAddress = await owner.getAddress();
    
    const dataConsumer = await ethers.getContractFactory("DataConsumer");
    const dataConsumerLINK = dataConsumer.attach(process.env.DATA_CONSUMER_LINK_ADDRESS as string) as DataConsumer;
    // const dataConsumerUSD = dataConsumer.attach(process.env.DATA_CONSUMER_USD_ADDRESS as string) as DataConsumer;


    let blockNumBefore = 0;
    let blockBefore;

    while(true) {
        if(blockNumBefore != await provider.getBlockNumber()) {
            
            blockNumBefore = await provider.getBlockNumber();
            blockBefore = await provider.getBlock(blockNumBefore);
        
            console.log(blockBefore!.timestamp);
            console.log("LINK/ETH: ", await dataConsumerLINK.getChainlinkDataFeedLatestAnswer());
            // console.log("ETH/USD: ", await dataConsumerUSD.getChainlinkDataFeedLatestAnswer());
        }
        await delay(10000);
        

    }

    console.log(`Minted tokens on:`, ownerAddress);
}



main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});