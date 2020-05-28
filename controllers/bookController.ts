import { Book } from '../utils/typeBook.ts'

let books: Book[] = [
    {
        id: "1",
        name: "Hands-On Microservices with Kubernetes",
        description: "Hands-on Microservices with Kubernetes will help you create a complete CI/CD pipeline and design and implement microservices using best practices. You will get hands on experience with the latest and greatest technologies, such as gRPC APIs, serverless frameworks, and service meshes. "
    },
    {
        id: "2",
        name: "Continuous Delivery with Docker and Jenkins - Second Edition",
        description: "The combination of Docker and Jenkins will help you scale up your builds, automate tasks and speed up Jenkins performance with the benefits of Docker containerization. This book will help you speed up software releases using fewer resources, improve quality with acceptance tests integrated into Jenkins builds and scale platform with Kubernetes. "
    },
    {
        id: "3",
        name: "Hands-On Cloud Administration in Azure",
        description: "Cloud offers new opportunities and more and more features every day. All services hosted in local Data Centers are now available in Azure. In this book, we’ll show you how to work in Azure and how to use Azure resources to your advantage. "
    },
]

const getBooks = ({ response }: { response: any }) => {
    response.body = {
        status: true,
        data: books
    }
}
export { getBooks }