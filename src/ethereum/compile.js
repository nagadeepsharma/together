const solc=require('solc');
const path=require('path');
const fs=require('fs-extra');
const buildPath=path.resolve(__dirname,'build')

fs.removeSync(buildPath);
const campaignPath=path.resolve(__dirname,'contracts','Campaign.sol');
const sourceCode=fs.readFileSync(campaignPath,'utf8'); 

const input = {
  language: "Solidity",
  sources: {
    "Campaign.sol": {
      content: sourceCode,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts["Campaign.sol"];


fs.ensureDirSync(buildPath);
for(let contract in output){
    console.log(contract.abi)
    fs.outputJSONSync(
        path.resolve(buildPath,contract+'.json'),
        output[contract]
    );

}