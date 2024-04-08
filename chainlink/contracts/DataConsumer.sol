// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// import "hardhat/console.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract DataConsumer {
    AggregatorV3Interface internal dataFeed;

    constructor(address dataFeedAddress) {
        dataFeed = AggregatorV3Interface(
            dataFeedAddress
        );
    }

    /**
     * Returns the latest answer.
     */
    function getChainlinkDataFeedLatestAnswer() public view returns (int) {
        // prettier-ignore
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            uint timeStamp,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        require(timeStamp > 0, "Bad timestamp");
        return answer;
    }
}
