module.exports = {
    apps: [{
        name: 'KusamaHub Demo',
        port: '9000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
    }]
}
