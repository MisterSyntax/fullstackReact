const env = process.env;

export const nodeEnv = env.NODE_ENV || "developement";

export default {
    port: env.PORT || 8080,
    host: env.HOST || "127.0.0.1",
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};

export const logStars = function (...vars) {
    console.info("*************");
    console.info(...vars);
    console.info("*************");
};