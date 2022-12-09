import {PublicKey, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";

export const airdrop = async (address: PublicKey, amount: number) => {
    const publicKey = new PublicKey(address);
    const conn = new Connection("https://api.devnet.solana.com", "confirmed");
    const signature = await conn.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)
    await conn.confirmTransaction(signature);
    

}

//(whenever you want to use this convert address: PublicKey to address: string) then uncomment the below line
//airdrop('HyAEtjw6d4qEf7ew7LUN8UV7Hes3wXk9yBL6kG9yCpfP',  1);

