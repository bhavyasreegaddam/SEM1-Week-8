import React from 'react'

const user = {
    name: 'John Doe',
    age:50 
  };
  const products = [
    { title: 'Bhavya', id: 1 },
    { title: 'Sindhu', id: 2 },
    { title: 'Greeshma', id: 3 },
  ];
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFriend ? 'green' : 'red'
      }}
    >
      {product.title}
    </li>
  );
const MyTasks = () => {
  return (
    <>
    <h1>Welcome To My React Tasks</h1>
    <button>Click Here</button>
    <h2>{user.name}</h2>
    <ul>{listItems}</ul>
    <button>
      Click me
    </button>
    </>
  )
}

export default MyTasks