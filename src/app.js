
import {envs} from './config/env.js';
import  {starServer} from './server/server.js'



const main = () => {
    starServer({
        port: envs.PORT,
        pubclic_path: envs.PUBLIC_PATH
    })
}

(async() => {
    main()
})()