export interface Faucet {
    sendToken(address: string, amount: number): Promise<void>;
}

export class FaucetService {
    async sendToken(address: string, amount: number): Promise<void> {
        // TODO:
        new substrate().
    }
}