const env = process.env;

export const nodeEnv = env.NODE_ENV || "developement";

export default {
    port: env.PORT || 8080
};

export const logStars = function(...vars){
    console.info("*************");
    console.info(...vars);
    console.info("*************");
};