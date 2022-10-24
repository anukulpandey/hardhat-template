require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
      hardhat: {},
      goerli: {
          url: API_URL,
          accounts: [`0x${PRIVATE_KEY}`]
      }
  },
};