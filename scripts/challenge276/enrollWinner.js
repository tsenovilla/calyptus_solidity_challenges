const { ethers } = require("hardhat");
const contract_address = "0x7CEd1c55DF8771E5348ff8aE758De71dC42C993e";
const abi = require("../../artifacts/contracts/challenge276/Solution276.sol/Solution276.json");
const WIZARDS_CONTRACT_ADDRESS = "0xF3C37E8025Ff444348e163B3846aF042729E818F";
const WINNER_NAME = "tsenovilla";

async function main() {
    const contract = await ethers.getContractAtFromArtifact(abi, contract_address); // Get the contract instance
    await contract.call_to_wizards(WIZARDS_CONTRACT_ADDRESS,WINNER_NAME);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});