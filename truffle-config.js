const { HOST, PORT } = require("./config");
const { adminProvider } = require("./utils/web3");

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      // gas: 8003877,
      // gasPrice: 2300000000
      gas: 999999999,
      //gasPrice: 1
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
          runs: 5000
        },
    },
  },
  mocha: {
    useColors: true
  } 
};
