pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";


contract BitCasasTokenCrowdsale is Crowdsale, MintedCrowdsale {

  constructor(
    uint256 _rate, 
    address _wallet, 
    IERC20 _token 
  ) 
    // MintedCrowdsale()
    Crowdsale(_rate, _wallet, _token) 
    public
  {
  }
}