Use this small hardhat project to solve the challenge: https://www.linkedin.com/posts/calyptus-web3_solidity-challenge-270-this-smart-activity-7153645436082216961-r7c9?utm_source=share&utm_medium=member_desktop

In order to run the project:
1. Install the dependencies via `npm install`.
2. Run `npx hardhat compile` to compile the contract and get its ABI.
3. Create a `.env` file to hold your env variables, namely PRIVATE_KEY (the private key of the account you use to interact with the contract) and RPC_URL (the url of your node provider: Infura, Alchemy,...)
4. Run `npx hardhat run scripts/getNumber.js --network sepolia` to get the current secret number.
5. Modify `NEW_NUMBER` in `updateNumber.js` and run `npx hardhat run scripts/updateNumber.js --network sepolia` to change the secret number.