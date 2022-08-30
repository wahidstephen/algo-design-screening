// Problem 1

const productsWithoutIds = [
  {
    name: "T-shirt",
    sku: "CIM-12345",
    description: "Highly customizable t-shirts",
    quantity: 5,
    unitPrice: 10,
  },
  {
    name: "500 Business Cards",
    sku: "CIM-67890",
    description: "Wow your clients with professional business cards!",
    quantity: 1,
    unitPrice: 30,
  },
  {
    name: "Baseball Hat",
    sku: "CIM-19283",
    description: "One-size-fits-all customizable baseball hat",
    quantity: 10,
    unitPrice: 8,
  },
];

/* ## Problem 1: Generated Ids */
const createIdGenerator = (prefix) => {
  // implement me!
  let productId = 1;
  return () => {
    return `${prefix}-${productId++}`;
  };
};

const productIdGenerator = createIdGenerator("product");

const productsWithIds = productsWithoutIds.map((product) => ({
  // uncomment this!
  id: productIdGenerator(),
  ...product,
}));

console.log(productsWithIds);

// Problem 2

const node = {
  value: 1,
  children: [
    {
      value: 11,
      children: [
        {
          value: 111,
          children: [],
        },
      ],
    },
    {
      value: 12,
      children: [
        {
          value: 121,
          children: [],
        },
        {
          value: 122,
          children: [],
        },
      ],
    },
  ],
};

const printChildren = (node) => {
  // implement me!
  if (node.value) console.log(node.value);
  if (node.children.length)
    node.children.map((childNode) => printChildren(childNode));
};

printChildren(node);

// Problem 3

const a = [1, 2, 50, 101];

Array.prototype.addToAll = function (num) {
  return this.map((el) => el + num);
};

const b = a.addToAll(100);

console.log(b);
