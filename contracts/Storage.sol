pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
contract Storage  {
    mapping(string => uint256)  _uintStorage;
    mapping(string => address) _addressStorage;
    mapping(string => bool) _boolStorage;
    mapping(string => string) _stringStorage;
    mapping(string => bytes4) _bytesStorage;
    bool public _initialized;
    address public owner;
}