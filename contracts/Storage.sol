// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;
import "./StorageSlot.sol";

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Storage {
    // NOTE: Sample 1:
    // uint256 x = 255; // 0x0
    // uint256 y = 100; // 0x1
    // mapping(uint256 => uint256) testing; // 0x2
    // constructor(){
    // testing[21] = 888; keccak256(21 + 0x2)
    // }

    // NOTE: Sample 2:
    constructor() {
        StorageSlot.getUint256Slot(keccak256("Hello World")).value = 150;
        StorageSlot.getUint256Slot(keccak256("end of the world"));
    }

    function check() external view {
        console.log(StorageSlot.getUint256Slot(keccak256("Hello World")).value);
        StorageSlot.getUint256Slot(keccak256("Hello World")).value;
    }
}
