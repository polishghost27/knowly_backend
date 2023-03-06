module.exports = {
    apps: [
        {
            name: 'knowly_strapi',
            script: 'npm',
            args: 'start',
            watch: true,
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
            exec_mode: 'cluster',
            instances: 'max',
        },
    ],
}
