const Web3 = require('web3')
const web3 = new Web3(
    // NODE URL
);

const PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE"
const PRIVATE_KEY = "YOUR_PRIVATE_KEY_HERE"
const CONTRACT_ADDRESS = "SMART_CONTRACT_ADDRESS"

const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT2.json')

const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS)

async function mintNft (tokenURI) {

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest')

    console.log('NONCE: ', nonce)

    const tx = {
        'from': PUBLIC_KEY,
        'to': PUBLIC_KEY,
        'nonce': nonce,
        'gas': 500000,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    }

    await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY).then(async (signedTx) => {
        await web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
            if(!err){
                console.log('The hash of your transaction is: ', hash)
            } else {
                console.log('Something went wrong: ', err)
            }
        })
    }).catch((err) => {
        console.log('Promise failed: ', err)
    })
}

mintNft('TOKEN_URI_HERE')

