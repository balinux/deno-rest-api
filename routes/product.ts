import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getBooks } from '../controllers/bookController.ts';

const router = new Router()
router.get('/api/v1/books', getBooks)
router.get('/', ({response} : {response:any}) => {
    response.body = {
        status: true,
        url:"http://localhost:8000/api/v1/books"
    }
})
export default router