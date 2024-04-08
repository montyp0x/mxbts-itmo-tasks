import { ethers } from "hardhat";
import { Signer } from "ethers";
import hardhat from "hardhat";
import "dotenv/config";
import { promises as fsPromises } from 'fs';
import { join } from 'path';
import { ETH_USD_FEED, LINK_ETH_FEED } from "../hardhat.config";



async function main() {
    await hardhat.run("compile");

    const filename: string = "../.env";

    let owner: Signer;

    [owner] = await ethers.getSigners();

    // --------------------------START OFT DEPLOYMENT------------------------------ //

    console.log("Deploying contract with the account:", await owner.getAddress());

    const dataConsumer = await ethers.getContractFactory("DataConsumer");
    const dataConsumerLINK = await dataConsumer.deploy(LINK_ETH_FEED);
    const dataConsumerUSD = await dataConsumer.deploy(ETH_USD_FEED);
    

    // --------------------------END OFT DEPLOYMENT------------------------------ //  

    try {
        await fsPromises.writeFile(join(__dirname, filename), "DATA_CONSUMER_LINK_ADDRESS=" + (await dataConsumerLINK.getAddress()) + "\n" + 
                                                              "DATA_CONSUMER_USD_ADDRESS=" + (await dataConsumerUSD.getAddress()) + "\n", 
        {
            flag: 'a+',
        });

    } catch (err) {
        console.log(err);
        return 'Something went wrong';
    }
}



main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});