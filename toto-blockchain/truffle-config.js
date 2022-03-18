
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = JSON.parse(fs.readFileSync("./secrets.json").toString().trim());

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      networkCheckTimeout: 10000,
      provider: () => {
         return new HDWalletProvider(
           secrets.mnemonic,
           `wss://kovan.infura.io/ws/v3/${secrets.projectId}`
         );
      },
      network_id: "*",
   },
   ropsten: {
    provider: function() {
      return new HDWalletProvider( secrets.mnemonic, `https://ropsten.infura.io/v3/${secrets.projectId}`)
    },
    network_id: 3
  }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
