//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./Engine.sol";
  
contract Game is Engine {

    function game(uint guess) public view returns (bool result) {
        uint random_1 = uint(keccak256(abi.encodePacked(block.timestamp))) % 8;
        uint random_2 = uint(keccak256(abi.encodePacked(block.timestamp))) % 8;
        uint final_answer = bitwise_or(random_1, random_2);

    if (final_answer == guess) {
        result = true;
    } else {
        result = false;
    }
    return result;
    }
}