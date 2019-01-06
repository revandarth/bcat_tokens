const BitCasasToken = artifacts.require("./BitCasasToken.sol");
const BitCasasTokenCrowdsale = artifacts.require("./BitCasasTokenCrowdsale.sol");


module.exports = async function(deployer, network, accounts) {
  const _name = "BitCasas Token";
  const _symbol = "BCAT";
  const _decimals = 18;
  await deployer.deploy(BitCasasToken, _name, _symbol, _decimals);
  const deployedToken = await BitCasasToken.deployed();

  const _rate           = 500;
  const _wallet         = accounts[0]; // TODO: Replace me
  const _token          = deployedToken.address;

  await deployer.deploy(
    BitCasasTokenCrowdsale,
    _rate,
    _wallet,
    _token,
  );
  return true;
};