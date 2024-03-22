import React, { useState } from 'react'

const ShopPage = () => {
  // 간단한 아이템 목록 (실제로는 서버에서 데이터를 가져와야 합니다)
  const [items, setItems] = useState([
    { id: 1, name: '아이템 1', price: 10 },
    { id: 2, name: '아이템 2', price: 20 },
    { id: 3, name: '아이템 3', price: 30 },
  ])

  // 장바구니 아이템 상태
  const [cartItems, setCartItems] = useState([])

  // 장바구니에 아이템 추가
  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  // 총 가격 계산
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <div>
      <h1>Welcome to Our Shop!</h1>
      <h2>Available Items:</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            <span>
              {item.name} - ${item.price}
            </span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Shopping Cart:</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} - ${cartItem.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  )
}

export default ShopPage
