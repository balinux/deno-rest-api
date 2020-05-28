import { Application, Router} from 'https://deno.land/x/oak/mod.ts';
import router from './routes/product.ts'

const port = 8000
const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

console.log('app running -> http://localhost:'+port);
app.listen({port})