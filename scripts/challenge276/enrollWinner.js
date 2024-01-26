const { ethers } = require("hardhat");
const SOLUTION_CONTRACT_ADDRESS = "0x3b902bedcb647D4889861a335651980E63887783";
const ABI = require("../../artifacts/contracts/challenge276/Solution276.sol/Solution276.json");
const WIZARDS_CONTRACT_ADDRESS = "0xF3C37E8025Ff444348e163B3846aF042729E818F";
const WINNER_NAME = "tsenovilla";

async function main() {
    const contract = await ethers.getContractAtFromArtifact(ABI, SOLUTION_CONTRACT_ADDRESS); // Get the contract instance
    await contract.call_to_wizards(WIZARDS_CONTRACT_ADDRESS,WINNER_NAME);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});