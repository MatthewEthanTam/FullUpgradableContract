pragma solidity ^0.8.0;

import "./Storage.sol";

contract Dogs is Storage {

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getNumberOfDogs() public view returns(uint256) {
        return _uintStorage["Dogs"];
    }
    
    function setNumberOfDogs(uint256 toSet) public virtual {
        _uintStorage["Dogs"] = toSet;
    }
    
}

contract DogsV2 is Dogs {

    
    constructor() {
        initialize(msg.sender);
    }

    function initialize(address _owner) public {
        require(!_initialized);
        owner = _owner;
    }
    function setNumberOfDogs(uint256 toSet) public override onlyOwner{
        _uintStorage["Dogs"] = toSet;
    }
}