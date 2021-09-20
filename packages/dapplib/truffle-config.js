require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift royal night unknown great light army general'; 
let testAccounts = [
"0x42b8edb5c1edccb3e84e2cbe86ef91d18610e70bce4ae027955e94fd6a6fe1af",
"0x980901e40fd689b1a1307b9cffd2d793f493ed0f5ae8df7bbf45c6f0b244bed3",
"0x6b9ca0b385a5bcf7e307cabe7f70047fb6e5d10500e51d469e1168a95f0446e9",
"0x3f0ac43ce6573f2b07f2ea5a4990607e8baa47d20aaf30abbe9c8a4998800a89",
"0xc743c6537b5013c4a91d1cb3f06e0b12e8568a221158eefc4a638cecb06cd8df",
"0x541dc03a8f8d45e5d21dd66a111e2f51f7be03a02babcf0faaa58a6fd8c4be9b",
"0xfd71ee7eeef0b07b6deffccdc964768f0ea55036b7d66ba90891cede71cf4e1d",
"0x63852feb911dc279f20a8999ecaa429d8f11084b403da32406f8e1928eb4c870",
"0x7260690a03f7ab265416e4e1eab545382ef819f9b0f43a1b8e0a5376669c0326",
"0x39636062eb669ba485b5abb63a78ba9256a693a68d8ac0efc034ba357b5b975d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

