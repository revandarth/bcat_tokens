import ether from './helpers/ether';
const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const BitCasasToken = artifacts.require('BitCasasToken');
const BitCasasTokenCrowdsale = artifacts.require('BitCasasTokenCrowdsale');

contract('BitCasasTokenCrowdsale', function([_, wallet, investor1, investor2]) {

  beforeEach(async function () {
    // Token config
    this.name = "BitCasas Token";
    this.symbol = "BCAT";
    this.decimals = 18;

    // Deploy Token
    this.token = await BitCasasToken.new(
      this.name,
      this.symbol,
      this.decimals
    );

    // Crowdsale config
    this.rate = 500;
    this.wallet = wallet;

    this.crowdsale = await BitCasasTokenCrowdsale.new(
      this.rate,
      this.wallet,
      this.token.address
    );

    // Add crowdsale contract as Minter
    this.token.addMinter(this.crowdsale.address);


  });


  describe('Verify crowdsale', function() {
    it('tracks the rate', async function() {
      const rate = await this.crowdsale.rate();
      rate.should.be.bignumber.equal(this.rate);
    });

    it('tracks the wallet', async function() {
      const wallet = await this.crowdsale.wallet();
      wallet.should.equal(this.wallet);
    });

    it('tracks the token', async function() {
      const token = await this.crowdsale.token();
      token.should.equal(this.token.address);
    });
  });

  describe('Verify minted crowdsale', function() {
    it('mints tokens after purchase', async function() {
      const initialTotalSupply = await this.token.totalSupply();
      await this.crowdsale.sendTransaction({ value: ether(1), from: investor1 });
      const newTotalSupply = await this.token.totalSupply();
      console.log(`initial totalSupply: ${initialTotalSupply}`)
      console.log(` newTotalSupply: ${newTotalSupply}`)

      assert.isTrue(newTotalSupply > initialTotalSupply);
    });
  });

  describe('accepting payments', function() {
    it('should accept payments', async function() {
      const value = ether(1);
      const purchaser = investor2;
      await this.crowdsale.sendTransaction({ value: value, from: investor1 }).should.be.fulfilled;
      await this.crowdsale.buyTokens(investor1, { value: value, from: purchaser }).should.be.fulfilled;
    });
  });
});
