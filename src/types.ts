export enum PRODUCT_CATEGORY {
    PEN_DRIVE = "Pen Drive",
    HEADSET = "Headset",
    WEBCAM = "Webcam"
}

export type TUser = {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    description: string,
    image_url: string
}

export type TPurchase = {
    id: string,
    buyer: string,
    total_price: number,
    created_at: string,
    paid: boolean,
}


export type TPurchaseItem = {
    id: string,
    name: string
    price: number,
    description: string,
    imageUrl: string,
    quantity: number
}
export type TPurchaseDetail = {
    purchaseId: string,
    totalPrice: number,
    createdAt: string,
    isPaid: boolean,
    buyerId: string,
    email: string,
    name: string,
    productsList: TPurchaseItem[]
}


