var BitCasasToken = artifacts.require("./BitCasasToken.sol");

module.exports = function(deployer) {
  const _name = "BitCasas Token";
  const _symbol = "BCAT";
  const _decimals = 18;
  deployer.deploy(BitCasasToken, _name, _symbol, _decimals);
};