export default {
    // API_ENDPOINT: 'http://localhost:8000/api',
    API_ENDPOINT: 'https://gentle-caverns-98467.herokuapp.com/api',
    TOKEN_KEY: 'ecoacme-auth-token',
    JWT_SECRET: process.env.JWT_SECRET|| "kc-secret",
}