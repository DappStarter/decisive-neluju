require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good climb surge traffic number crater remember smile hockey prize outer gentle'; 
let testAccounts = [
"0xc3f7eb6354b89e6384cbc7c29972cda2d5a27d5c1e2ac32a8bea95087e2e10dc",
"0x7765ff7470f432e1a936125b59f9bb16dadfd0fa242420818e35225ecd0cd081",
"0x1aeb3147dda987cef8e1a457c26b05c99ab720e65b6e3dffd9d81db0321f53c0",
"0xb7435515648d229b3fdddf5a016aa1f133106f29e353341044f434fef8d15c4d",
"0x606e1149e08e90dc8fd215ce45728b3a7791062499f1fb6213d7ed7c5a3dc0aa",
"0x7e2e6610c62511448499e19839e81827dfbc22eed64da1b49b0680e7ede0d599",
"0xe05a898bdd781b41eb4ecda11bb511aa4946451b43e6dfe6a68d4bd55f814b9e",
"0x711c91f953eed5d2c587518358a24c1c71f0a96b1c097c8ae3670bbfd4030956",
"0x89b07df85fce2ade3b8413cffa4c7a7fb8d2d93472e6a1d896573435dc4a732c",
"0x1eb8c3509428e5538f8693910c6c7b57a02c5c16134d028a307b29ada7e09f4e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


