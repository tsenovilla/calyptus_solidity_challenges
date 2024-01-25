const { ethers } = require("hardhat");
const contract_address = "0x74cd37DfCD91a4eb294213B370EFc3Fb03a45300";
const abi = require("../../artifacts/contracts/Challenge270.sol/Challenge270.json");
const NEW_NUMBER = 13

async function main() {
    const contract = await ethers.getContractAtFromArtifact(abi, contract_address); // Get the contract instance
    const tx = await contract.updateSecretNumber(NEW_NUMBER);
    await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
