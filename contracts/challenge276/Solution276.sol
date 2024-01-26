// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract Solution276 {

    error ExecutionError();

    // This function calls the enrollWinner's function of WizardEnigma contract, sending the selector of solve_puzzle(the function that the contract will call back) and the user name.
    function call_to_wizards(address wizards_contract_address, string calldata userName) external {
        (bool success, ) = wizards_contract_address.call(abi.encodeWithSignature("enrollWinner(bytes4,string)", bytes4(keccak256("solve_puzzle()")), userName));
        if (!success){
            revert ExecutionError();
        }
    }

    // Exactly the same as the previous function but manually ABI encoding the data into memory to avoid unnecessary memory expansions and save a bit of gas. Note that we're using some 'forbidden' zones of memory for our purposes (slots 0x40 and 0x60), but it's OK as the contract's memory's not used after the assembly block
    function call_to_wizards_improved(address wizards_contract_address, string calldata) external{
        assembly{
            mstore(0x00, 0x222366b600000000000000000000000000000000000000000000000000000000) // bytes4(keccak256("enrollWinner(bytes4,string)") = 0x222366b6
            mstore(0x04, 0x495179ca00000000000000000000000000000000000000000000000000000000) // bytes4(keccak256("solve_puzzle()") = 0x495179ca
            calldatacopy(0x24,0x24,0x64) // As the string comes as the second argument and the first one is an address, it starts at calldata's 0x24. It's length it's 0x60 (offset + length + string itself) so it goes til 0x64. As it's calldata, it's already ABI encoded. Eveything's stored at memory's 0x24 due to the solve_puzzle's selector ends there
            let success := call(gas(),wizards_contract_address,0,0x00,0x84,0x0,0x0) // 0x04 + 0x20 + 0x60 = 0x84 -> Therefore the size of the memory used as input. The called function returns nothing, then the space reserved for the output is 0.
            if iszero(success){ // Revert on fail
                revert(0,0)
            }
        }
    }

    // This function will be called by the delegatecall in the WizardsEnigma contract. To solve the challenge, we have basically to return 999 as it's the secret number. We can send back the first 32 bytes of memory using Yul and save some gas avoiding an unnecessary memory expansion
    function solve_puzzle() external pure returns (uint256){
        assembly{
            mstore(0x00, 999)
            return (0x00, 0x20)
        }
    }
}