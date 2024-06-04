
const {envs} = require('./config/env');
const {starServer} = require('./server/server')



const main = () => {
    starServer({
        port: envs.PORT,
        pubclic_path: envs.PUBLIC_PATH
    })
}

(async() => {
    main()
})()