import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const GamerhubManager = await ethers.getContractFactory("GamerhubManager");
  const gamerhubManager = await GamerhubManager.deploy();

  const GamerhubToken = await ethers.getContractFactory("GamerhubToken");
  const gamerhubToken = await GamerhubToken.deploy();

  const Payout = await ethers.getContractFactory("Payout");
  const payout = await Payout.deploy();

  console.log("manager address:", gamerhubManager.address);
  console.log("payout address:", payout.address);
  console.log("token address:", gamerhubToken.address);

  //set token address on payout
  await payout.setAddress(gamerhubToken.address);

  await gamerhubManager.setPackage(
    0,
    2630000,
    ethers.utils.parseUnits("0.02991913", "ether")
  );
  await gamerhubManager.setPackage(
    1,
    2630000,
    ethers.utils.parseUnits("0.04489368", "ether")
  );
  await gamerhubManager.setPackage(
    0,
    2630000,
    ethers.utils.parseUnits("0.05986822", "ether")
  );

  const mypackage = await gamerhubManager.getPackage(0);
  const mypackage1 = await gamerhubManager.getPackage(1);
  const mypackage2 = await gamerhubManager.getPackage(2);
  console.log("package value:", mypackage, mypackage1, mypackage2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
