import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getbook } from '../controllers/bookController.ts'

const router = new Router()
router.get('/', ({ response }: { response: any }) => {
    response.body = "example"
})

router.get('/api/v1/books', getBooks)

export default router