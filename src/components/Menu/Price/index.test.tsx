import { render, screen } from "@testing-library/react";
import Price from ".";
import { currency } from "../../../utils";


test("display both original and discount price when discount rate is more than 0", () => {
    const price = 3500;
    const discountRate = 0.1;
    const finalPrice = price - (price * discountRate)
    render(<Price price={price} discountedRate={discountRate}/>)
    let finalPriceElement = screen.getByText(`${currency + " " + finalPrice?.toLocaleString()}`)
    let priceElement = screen.getByText(`${currency + " " + price?.toLocaleString()}`)
    expect(finalPriceElement).toBeInTheDocument()
    expect(priceElement).toBeInTheDocument()
})


test("display only original if discount rate is 0", () => {
    const price = 3000;
    const discountRate = 0;
    render(<Price price={price} discountedRate={discountRate}/>)
    let priceElement = screen.getByText(`${currency + " " + price?.toLocaleString()}`)
    expect(priceElement).toBeInTheDocument()
})