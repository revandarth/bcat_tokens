# Security Token Smart Contract

This repository is designed to develop a securities tokens using solidity smart contract that provide a platform for launching regulatory-compliant token sale on Ethereum. The repository is heavly relies on OpenZeppelin standards which provide us with added security benefit, since the OpenZeppelin library is community vetted for security vulnerabilities.


## Getting Started

## Node JS environment Setup

$ node -v

## Truffle

$ npm install -g truffle
P.S: If you are following this, you need  @4.1.11
$ truffle version

Install Ganache
$ npm install -g ganache-cli

OpenZeppelin integrates with [Truffle](https://github.com/ConsenSys/truffle) 

## Truffle

To use with Truffle, first install it and initialize your project with `truffle init`.

```
sh 
mkdir bcat_tokens && cd bcat_tokens
truffle init
```

## Installing OpenZeppelin

After installing truffle, to install the OpenZeppelin library, run the following in your Solidity project root directory:

```
sh
npm init -y
npm install -E openzeppelin-solidity
```

**Note that OpenZeppelin does not currently follow semantic versioning.** You may encounter breaking changes upon a minor version bump. We recommend pinning the version of OpenZeppelin you use, as done by the `-E` (`--save-exact`) option.

## Security

```
CACSVML-17056:bcat_tokens rairre160$ truffle migrate --reset
Compiling ./contracts/BitCasasToken.sol...
Compiling openzeppelin-solidity/contracts/access/Roles.sol...
Compiling openzeppelin-solidity/contracts/access/roles/MinterRole.sol...
Compiling openzeppelin-solidity/contracts/access/roles/PauserRole.sol...
Compiling openzeppelin-solidity/contracts/lifecycle/Pausable.sol...
Compiling openzeppelin-solidity/contracts/math/SafeMath.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/IERC20.sol...
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x32476a3e19e7396dfad8d13e15471f780d1d46d8e8021394827f065735df9e4a
  Migrations: 0x7c102b5290087b0e6e29516b71c7f6a237d056a1
Saving successful migration to network...
  ... 0x13f29d92ffaade92349afa2897647b816df804c066ad202945e05bcc112456a2
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing BitCasasToken...
  ... 0x4610983484405d35eef8f6fd5787fd8e1febf325eac3f0d4263297ea2c52126f
  BitCasasToken: 0x1846039e94955b261bc5d102bef15e1eef591350
Saving successful migration to network...
  Deploying BitCasasTokenCrowdsale...
  ... 0x28699000e783f0e300aaf2bb9452afa5dc32638b6a3eede2d2f03f22469dd311
Saving artifacts...
  ... 0x2aac23d74022aca049894f085e357c6f780bde73f7adcc832d0c29436bf10382
  BitCasasTokenCrowdsale: 0x7de84288408a7ce912a1843d9f3e6b1b3a524839
```

## Developer Resources
- Darth Revan


