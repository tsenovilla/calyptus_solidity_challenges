// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract WizardsEnigma {
    mapping(address => string) public bookOfWinners;
    uint256 private magicNumber = 999;

    function enrollWinner(bytes4 magicFunctionSelector, string calldata userName) external {
        require(msg.sender != tx.origin, "Direct calls are not worthy!");
        (bool success, bytes memory data) = msg.sender.delegatecall(abi.encodeWithSelector(magicFunctionSelector));
        require(success, "Delegatecall failed");

        uint256 result;
        assembly {
            result := mload(add(data, 32))
        }

        require(result == 999, "The magic number is not correct");
        bookOfWinners[tx.origin] = userName;
    }
}