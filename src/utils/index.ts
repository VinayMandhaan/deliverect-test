export const currency = "AED"

export const getDiscountedPrice = (price: number, discountedRate: number) => {
    if (discountedRate > 0) {
        let discountedPrice = price - (price * discountedRate)
        return discountedPrice
    } else {
        return price
    }
}