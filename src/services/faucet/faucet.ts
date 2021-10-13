import * as substrate from '../../network/substrate';

export interface Faucet {
    sendToken(address: string, amount: number): Promise<void>;
}

export class FaucetService implements Faucet {
    async sendToken(address: string, amount: number): Promise<void> {
        // TODO:
        // new substrate.subdaoNode().sendToken(address, amount);
        return
    }
}