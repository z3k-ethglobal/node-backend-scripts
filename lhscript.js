// import lighthouse from '@lighthouse-web3/sdk'
const lighthouse = require('@lighthouse-web3/sdk');

const apiKey = 'c277d286.ab709f0043714e73a38dfa4aee5752c1';

async function lh () {

    const uploadResponse = await lighthouse.upload(
    '/Users/aryan/4zzz.pdb',
    apiKey
    );

    console.log(uploadResponse);
}

// main().catch(error => {
//     console.error(error);
//     process.exitCode = 1;
//   });
