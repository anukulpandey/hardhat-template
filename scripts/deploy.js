async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying from the address "+deployer.address);
    console.log("Account balance: ",(await deployer.getBalance()).toString());
    const Token = await ethers.getContractFactory("HelloWorld");
    const token = await Token.deploy("Hello World!");
    console.log(token.address);
}

main()
    .then(()=>process.exit(0))
    .catch((err)=>{
    console.error(err);
    process.exit(1);
})