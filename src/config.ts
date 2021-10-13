import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface Config {
    // app
    port: number;
    debugLogging: boolean;
    jwtSecret: string;

    // network
    network_name: string;
    endpoint: string;
    contract_address: string;
    abi_path: string;
    user_address: string;
}

const isDevMode = process.env.NODE_ENV == "development";

const config: Config = {
    port: +(process.env.PORT || 3000),
    debugLogging: isDevMode,
    jwtSecret: process.env.JWT_SECRET || "your-secret-whatever",

    network_name: process.env.NETWORK_NAME || "other",
    endpoint: process.env.ENDPOINT || "",
    contract_address: process.env.CONTRACT_ADDRESS || "",
    abi_path: process.env.ABI_PATH || "",
    user_address: process.env.USER_ADDRESS || "",
};

export { config };