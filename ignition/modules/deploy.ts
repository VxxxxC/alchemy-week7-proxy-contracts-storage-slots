import hardhat from "hardhat";

const hre = hardhat;

async function deploy() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const deploy_storage = await Storage.deploy();

  const deployed = await deploy_storage.waitForDeployment();

  console.log({ deployed });
  console.log(`Contract deployed to: ${deployed.target}`);
}

deploy().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

