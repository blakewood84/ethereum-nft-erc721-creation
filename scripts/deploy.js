const hre = require('hardhat')

async function main() {
    const [deployer] = await ethers.getSigners(); 

    console.log("Deploying contracts with the account:", deployer.address);

    const FactoryNFT = await hre.ethers.getContractFactory("MyNFT2"); // Getting the Contract

    const factoryNFT = await FactoryNFT.deploy();

    await factoryNFT.deployed(); // waiting for the contract to be deployed

    console.log("FactoryNFT deployed to:", factoryNFT.address); // Returning the contract address on the rospten
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });