const BigNumber = web3.BigNumber;

// const DappToken = artifacts.require('DappToken');
const BitCasasToken = artifacts.require("BitCasasToken");

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

  
contract('BitCasasToken', accounts => {

  const _name = "BitCasas Token";
  const _symbol = "BCAT";
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await BitCasasToken.new(_name, _symbol, _decimals);

  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      console.log(name)
      console.log(`_name: ${_name}`)

      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      console.log(symbol)
      console.log(`_name: ${_symbol}`)

      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      console.log(decimals)
      console.log(`_name: ${_decimals}`)
      decimals.should.be.bignumber.equal(_decimals);
    });
  });
});