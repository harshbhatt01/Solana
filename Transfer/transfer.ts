import {Connection,Keypair,LAMPORTS_PER_SOL,PublicKey,sendAndConfirmTransaction,SystemProgram,Transaction} from "@solana/web3.js";
import {airdrop} from "../Airdrop/airdrop";
import {showBalance} from "../ShowBalance/showBalance";

export const transferSol = async(from: Keypair, to: PublicKey, amount: number) => {
    const connection = new Connection("https://api.devnet.solana.com", 'confirmed');
    const transaction = new Transaction();

    const instruction = SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: LAMPORTS_PER_SOL * amount
    });

    transaction.add(instruction);
    
    await sendAndConfirmTransaction(connection, transaction, [
        from
    ])
    console.log("Done");
}

const secret = Uint8Array.from([
    253, 209, 191,  74, 139,  40, 192, 182,  70,  56, 155,
    111,  46, 158, 166,  46, 146, 132,  18,  60,  55,  84,
    142, 212, 207,  72, 126, 111, 224, 197, 234,   5,  44,
    121, 204,  15, 155, 212, 137,  48, 160,  60,  88,  94,
    241, 126,   6, 111, 140,  20, 105,  97,  19, 192,  16,
    167, 128, 252, 223, 189,  80, 218, 204, 251
  ])
const fromKeyPair = Keypair.fromSecretKey(secret);
const toPublicKey = new PublicKey("Bm3w9ThERbZ1K38qZVr63sU1bvrDH6RAQZ751RyHHrz5");

(async() => {
    await airdrop(fromKeyPair.publicKey, 2);
    const initBalance = await showBalance(fromKeyPair.publicKey);
    console.log(`Initial balance of from wallet is ${initBalance}`);
    const initBalanceTo = await showBalance(toPublicKey);
    console.log(`Initial balance of to wallet is ${initBalanceTo}`);

     await transferSol(fromKeyPair, toPublicKey, 1);
    
     const initBalance2 = await showBalance(fromKeyPair.publicKey);
     console.log(`Post balance of from wallet is ${initBalance2}`);
     const initBalanceTo2 = await showBalance(toPublicKey);
     console.log(`Post balance of to wallet is ${initBalanceTo2}`);
})()
