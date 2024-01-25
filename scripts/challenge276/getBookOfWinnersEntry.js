const { ethers } = require("hardhat");
const contract_address = "0xF3C37E8025Ff444348e163B3846aF042729E818F";
const abi = require("../../artifacts/contracts/challenge276/WizardsEnigma.sol/WizardsEnigma.json");
const BOOK_ADDRESS = "0x7D66d5555720b4E2DEd8ea1cd5E8786b3138db04";

async function main() {
    const contract = await ethers.getContractAtFromArtifact(abi, contract_address); // Get the contract instance
    const name = await contract.bookOfWinners(BOOK_ADDRESS);
    console.log(name); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});