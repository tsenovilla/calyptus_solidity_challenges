const { ethers } = require("hardhat");
const contract_address = "0x74cd37DfCD91a4eb294213B370EFc3Fb03a45300";

async function main() {
  // Get the storage at slot 0 = the slot used by secretNumber
  const secretNumber = await ethers.provider.getStorage(contract_address, 0);
  console.log(secretNumber);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
