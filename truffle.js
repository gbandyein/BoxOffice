const { HOST, PORT } = require("./config");
const { adminProvider } = require("./utils/web3");

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    ganache: {
      host: HOST,
      port: PORT,
      network_id: "*",
      //gas: 8003877,
      //gas: 999999999,
      gas: 9999999999,
      //gasPrice: 0
    },
    rinkeby: {
      provider: () => adminProvider,
      network_id: 4
    }
  },
  compilers: {
    solc: {
       version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
        optimizer: {
          enabled: true,
          runs: 50000
        },
    },
  },
  mocha: {
    useColors: true
  } 
};
