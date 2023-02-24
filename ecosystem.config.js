module.exports = {
    apps: [
        {
            name: 'knowhow_strapi_production',
            script: 'npm',
            args: 'start',
            watch: true,
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
            interpreter: 'node@14',
            exec_mode: 'cluster',
            instances: 'max',
        },
    ],
}
