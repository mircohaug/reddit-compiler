const dev = {
    BACKEND_HOST: "http://localhost:8000"
};

const prod = {
    BACKEND_HOST: "https://hku3e1grla.execute-api.eu-central-1.amazonaws.com"
};

export interface Config {
    BACKEND_HOST: string;
}

const config: Config = process.env.NODE_ENV === 'production'
    ? prod
    : dev;

export default {
    ...config
};
