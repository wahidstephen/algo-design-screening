## Problem 1: Generated Ids

Inside `src/index.js` you are provided data (`productsWithoutIds`) we'll use to drive this exercise. The problem is this data lacks an `id` value. We'd like you to augment the existing data such that each object within the array contains an `id`. The goal is to achieve this programmatically via a function called `createIdGenerator`.

Using `createIdGenerator` should look like this:

```js
const createIdGenerator = (prefix) => {
  /* your implementation */
};

// call `createIdGenerator` passing it the "prefix" value
// `createIdGenerator(prefix)` returns a new function
const productIdGenerator = createIdGenerator("product");

// Each successive call will use the prefix and concatonate
// the next number starting with `1`
productIdGenerator(); // `"product-1"`
productIdGenerator(); // `"product-2"`
productIdGenerator(); // `"product-3"`
```

Given the data in `src/index.js`, once `generateId` is implemented, the following code:

```js
const productIdGenerator = createIdGenerator("product");

const productsWithIds = productsWithoutIds.map((product) => ({
  id: productIdGenerator(),
  ...product
}));
```

should result in `productsWithIds` looking like the following:

```js
const productsWithoutIds = [
  {
    id: "product-1", // <--- new id
    name: "T-shirt",
    sku: "CIM-12345",
    description: "Highly customizable t-shirts",
    quantity: 5,
    unitPrice: 10
  },
  {
    id: "product-2", // <--- new id
    name: "500 Business Cards",
    sku: "CIM-67890",
    description: "Wow your clients with professional business cards!",
    quantity: 1,
    unitPrice: 30
  },
  {
    id: "product-3", // <--- new id
    name: "Baseball Hat",
    sku: "CIM-19283",
    description: "One-size-fits-all customizable baseball hat",
    quantity: 10,
    unitPrice: 8
  }
];
```

## Problem 2: Print all values

An object, node, has 2 properties :
  value - a number and
  children - an array of nodes
Write a function that takes in a node and prints the 'value' of the node,the value of each of its children, their children and so on in a depth-first manner.

```js
const node = {
  value: 1,
  children: [
    {
      value: 11,
      children: [
        {
          value: 111,
          children: []
        }
      ]
    },
    {
      value: 12,
      children: [
        {
          value: 121,
          children: []
        },
        {
          value: 122,
          children: []
        }
      ]
    }
  ]
}
```

## Problem 3: addToAll

The function addToAll adds a given number to all the elements of an array. Write code to implement function addToAll so that the following code snippet gives the
mentioned output.

```js
a = [1,2,50,101]
y = [5,6,7]

b = a.addToAll(100)
z = y.addToAll(10)

console.log(b)
[101,102,150, 201]

console.log(z)
[15,16,17]
```