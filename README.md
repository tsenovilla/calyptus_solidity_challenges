Use this small hardhat project to solve the Solidity challenges proposed by Calyptus on LinkedIn https://www.linkedin.com/school/calyptus-web3/

In order to run the project:
1. Install the dependencies via `npm install`.
1. Run `npx hardhat compile` to compile the contract and get its ABI.
1. Create a `.env` file to hold your env variables, namely PRIVATE_KEY (the private key of the account you use to interact with the contract) and RPC_URL (the url of your node provider: Infura, Alchemy,...)


To run the solution of challenge #270:
1. Run `challenge270/getNumber.js` to get the current secret number.
1. Modify `NEW_NUMBER` in `challenge270/updateNumber.js` and run the script to change the secret number.

To run the solution of challenge #276:
1. Deploy the contract by yourself using the `challenge276/deploySolution.js` script or use the one deployed by me: 0x3b902bedcb647D4889861a335651980E63887783. In case you deploy your own contract, enter the right address in the `SOLUTION_CONTRACT_ADDRESS` constant in `challenge276/enrollWinner.js` and in `challenge276/enrollWinnerImproved.js`
1. Set your name in the `WINNER_NAME` constant in `challenge276/enrollWinner.js` or in `challenge276/enrollWinnerImproved.js` (more gas efficient) and run the selected script.
1. Set your address in the `BOOK_ADDRESS` constant in `challenge276/getBookOfWinnersEntry.js` and run the script to check if everything passed well.
