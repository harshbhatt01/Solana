import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export const showBalance = async (publicKey: PublicKey) => {
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const response = await connection.getAccountInfo(publicKey);
    return response?.lamports;
}

(async()=>{
    const publicKey = "HyAEtjw6d4qEf7ew7LUN8UV7Hes3wXk9yBL6kG9yCpfP"
    const balance = await showBalance(new PublicKey(publicKey))
    console.log(`the balacne of account ${publicKey} is ${balance}`);
    
})()