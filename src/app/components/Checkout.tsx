"use client"
import {HelioCheckout} from '@heliofi/checkout-react'

const helioConfig = {
    paylinkId: "66de922898521a1c2b424521",
  
    showPayWithCard: false
};

export function Checkout() {
  return <HelioCheckout config={helioConfig} />;
}