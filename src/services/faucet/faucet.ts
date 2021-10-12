import subdaoNode from '../../network/substrate';

export interface Faucet {
    sendToken(address: string, amount: number): Promise<void>;
}

export class FaucetService implements Faucet {
    async sendToken(address: string, amount: number): Promise<void> {
        // TODO:
        new subdaoNode().sendToken(address, amount);
    }
}