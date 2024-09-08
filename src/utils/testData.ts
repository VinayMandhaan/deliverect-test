export const testData = {
    categories: [
        {
            id: "1",
            name: "Burgers",
            url: "burgers"
        },
        {
            id: "2",
            name: "Main courses ",
            url: "main-courses"
        },
    ],
    items: [
        {
            id: "1",
            name: "Chicken & Avocado",
            url: "chicken-avocado",
            price: 3500,
            discount_rate: 0.1,
            stock: {
                availability: 100
            },
            description: "Grilled chicken, avocado, tomato, iceberg lettuce and mayonnaise",
            photo: "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/chicken-avocado.jpg",
            category_id: "1"
        },
        {
            id: "2",
            name: "Cheese Burger",
            url: "cheese-burger",
            price: 1500,
            discount_rate: 0.2,
            stock: {
                "availability": 1
            },
            description: "Very nice cheese burger.",
            photo: "https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/cheese-burger.jpg",
            category_id: "1"
        }
    ]
}