import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import router from './routes/book.ts'

const port = 8000
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log('app running at :' + port)
app.listen({port})