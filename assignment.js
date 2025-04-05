/*
1.Use + as a unary, binary operator and list the possible ways it can be used.
*/

// +unary operator -----> try to convert operand into number

console.log(
    "*************************Question_1********************************"
  );
  const data = "1";
  const data2 = "anurag";
  let data5;
  const data3 = {};
  const data4 = [];
  let data6 = null;
  
  console.log("data", typeof data); //string
  console.log("data2", typeof data2); //string
  console.log("data3", typeof data3); //object
  console.log("data4", typeof data4); //object
  console.log("data5", typeof data5); //undefine
  console.log("data6", typeof data6); //object
  
  console.log("data", typeof +data); // number
  console.log("data2", typeof +data2); //number
  console.log("data3", typeof +data3); //number
  console.log("data4", typeof +data4); //number
  console.log("data5", typeof +data5); //number
  console.log("data6", typeof +data6); //number
  
  console.log("data2", +data2); // NaN
  console.log("data3", +data3); // NaN
  console.log("data4", +data4); // 0
  console.log("data5", +data5); // NaN
  console.log("data6", +data6); // 0
  
  console.log(typeof NaN); // number
  
  console.log(
    "-----------------------------------Binary--------------------------------"
  );
  
  // binary + adds two values together
  
  const num1 = 23;
  
  const num2 = "34";
  
  const num3 = "anurag";
  
  const num4 = 90;
  
  console.log(num1 + num2); // 2334
  console.log(num2 + num3); // 34anurag
  console.log(num1 + num4); // 113
  console.log(num4 + num2); // 9034
  console.log(typeof (num1 + num2)); // string
  console.log(typeof (num2 + num3)); // string
  console.log(typeof (num1 + num4)); //  number
  console.log(typeof (num4 + num2)); // string
  
  //2
  
  /*
  2.Create a JavaScript object that represents a product with the following properties:
  Product Name (string)   
  Expiry Date (Date object)
  
  The object should also have a method called isExpired() that:
  i. Checks if the product is expired based on the current date.
  ii. Returns true if the product is expired and false otherwise.
   */
  
  console.log(
    "*************************Question_2********************************"
  );
  
  const products = {
    name: "Wai Wai",
    expireDate: new Date("2025-07-15"),
  };
  
  const date = new Date();
  
  function isExpired() {
    console.log(Boolean(new Date(Date.now()) > products.expireDate));
  }
  
  isExpired();
  
  /*
  3. Create a function called checkStock(product) that returns a Promise. This function should simulate checking if a product is in stock by using Math.random() to determine success or failure. If the value is even, assume the product is in stock; else, it is not.
  
  The promise should:
  Resolve after 2 seconds with a message:
  "Product [product name] is available!"
  
  Reject after 2 seconds with an error message:
  "Sorry, [product name] is out of stock!"
  
  Use both async/await and .then....catch syntax for checking
   */
  
  console.log(
    "*************************Question_3********************************"
  );
  let product = {
    name: "waiwai",
    stock: Math.floor(Math.random() * 1000),
  };
  
  const checkStock = async () => {
    return new Promise((resolve, reject) => {
      console.log(product.stock);
  
      if (product.stock % 2 === 0) {
        setTimeout(() => {
          resolve(` Product ${product.name} is available!`);
        }, 2000);
        console.log("even ", product.stock);
      } else {
        setTimeout(() => {
          reject(`Sorry, ${product.name} is out of stock!`);
        }, 2000);
        console.log("odd", product.stock);
      }
    });
  };
  
  checkStock()
    .then((message) => {
      console.log("from promise", message);
    })
    .catch((err) => {
      console.log("from promise", err);
    });
  
  const productStock = async () => {
    try {
      const stock = await checkStock();
      console.log("from async await ", stock);
    } catch (error) {
      console.log("from async await ", error);
    }
  };
  
  productStock();
  