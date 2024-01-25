// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Challenge270 {
    uint256 private secretNumber;

    constructor(uint256 _secretNumber){
        secretNumber = _secretNumber;
    }

    function updateSecretNumber(uint256 _newSecretNumber) public{
        secretNumber = _newSecretNumber;
    }
}
