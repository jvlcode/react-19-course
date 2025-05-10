import React, { useState, useCallback, useEffect } from 'react';

function ProductPriceCalculator() {
  const [productId, setProductId] = useState(1);
  const [price, setPrice] = useState(100);
  const [discountedPrice, setDiscountedPrice] = useState(100);
  const [note, setNote] = useState('');

  // Simulate product price change when product ID changes
  useEffect(() => {
    const basePrices = {
      1: 100,
      2: 200,
      3: 300,
    };
    setPrice(basePrices[productId] || 100);
  }, [productId]);

  // Callback to calculate discount, only recreated when productId or price changes
  const calculateDiscount = useCallback(() => {
    console.log('Calculating discount...'); // To demonstrate when it runs
    let discount = 0;
    if (productId === 1) discount = 0.1;
    else if (productId === 2) discount = 0.15;
    else if (productId === 3) discount = 0.2;

    setDiscountedPrice(price - price * discount);
  }, [productId, price]);

  // Automatically recalculate discount when dependencies change
  useEffect(() => {
    calculateDiscount();
  }, [calculateDiscount]);

  return (
    <div>
      <h2>Product ID: {productId}</h2>
      <h3>Original Price: ${price.toFixed(2)}</h3>
      <h3>Discounted Price: ${discountedPrice.toFixed(2)}</h3>

      <div>
        <button onClick={() => setProductId(1)}>Product 1</button>
        <button onClick={() => setProductId(2)}>Product 2</button>
        <button onClick={() => setProductId(3)}>Product 3</button>
      </div>

      <div style={{ marginTop: '1em' }}>
        <h4>Note (won't trigger discount calculation):</h4>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note here"
        />
        <p>Current Note: {note}</p>
      </div>
    </div>
  );
}

export default ProductPriceCalculator;
