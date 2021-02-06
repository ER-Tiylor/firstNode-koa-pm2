const Router = require('koa-router')
const router = new Router()
router
    .get('/api/',(ctx,next) =>{
        ctx.body = 'hello world!';
    })
    .get('/api/test',(ctx,next)=>{
        ctx.body = {
            msg:'here is test',
            query:ctx.query,
            queryString:ctx.querystring
        }
    })
    .post('./api/users',(ctx,next)=>{
        ctx.body = 'here is users';
    })
    .all('/api/user/:id',(ctx,next)=>{
        //...
    })
    
module.exports = router