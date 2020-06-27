import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getBook, deleteBook, addBook } from '../controllers/bookController.ts'

const router = new Router()
router.get('/', ({ response }: { response: any }) => {
    response.body = "example"
})

router.get('/api/v1/books', getBooks)
    .get('/api/v1/books/:id', getBook)
    .delete('/api/v1/books/:id', deleteBook)
    .post('/api/v1/books', addBook);

export default router