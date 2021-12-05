require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/4835aacd00f14c729f65403918fe2367",
      accounts: ["b62ba4d5d62a3b3024e30d5567a84f61b12599fddb4f743d31b3c6dc7fa76dff"]
    }
  }
};
