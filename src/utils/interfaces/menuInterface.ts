export interface CategoriesInterface {
    id: string;
    name: string;
    url: string
}

export interface Item {
    id: string;
    name: string;
    url: string;
    price: number;
    discount_rate: number;
    stock: {
        availability: number;
    },
    description: string;
    photo: string | null;
    category_id: string;
}

export interface MenuData {
    categories: CategoriesInterface[] | undefined;
    items: Item[]
}