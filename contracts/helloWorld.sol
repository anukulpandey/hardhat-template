//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract HelloWorld {
    string public message;

    event messageUpdated(string oldMsg,string newMsg);

    constructor(string memory firstMessage) {
        message = firstMessage;
    }

    function updateMessage(string memory _newMessage) public {
        string memory oldMsg = message;
        message = _newMessage;
        emit messageUpdated(oldMsg, _newMessage);
    }
}