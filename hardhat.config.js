require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:3000/",
    },
    shm: {
      url: "https://hackathon.shardeum.org/",
      accounts: ["d8f4d1e63b2d160704faa2ec45ecb6d5a47285e799654a43be3903e6bb240558"],
      gas: 20000000,
    },
  },
};