// Jason File
var data = [
	{
        "id": 1,
        "name": "Test Product1",
        "price": 12.50,
        "tags": ["TRADE A", "ice"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 2,
        "name": "Test Product2",
        "price": 42.50,
        "tags": ["TRADE B", "ice2"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 3,
        "name": "Test Product3",
        "price": 200.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 3",
		"discount" : 3
    },
    {
        "id": 4,
        "name": "Test Product4",
        "price": 52.50,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 5,
        "name": "Test Product5",
        "price": 712.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 1",
		"discount" : 0
    },
    {
        "id": 6,
        "name": "Test Product6",
        "price": 17.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 7,
        "name": "Test Product7",
        "price": 55.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 8,
        "name": "Test Product11",
        "price": 37.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 4",
		"discount" : 12
    },
    {
        "id": 9,
        "name": "Test Product9",
        "price": 82.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 4",
		"discount" : 34
    },
    {
        "id": 10,
        "name": "Test Product10",
        "price": 52.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 2",
		"discount" : 25
    },
    {
        "id": 11,
        "name": "Test Product22",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 1",
		"discount" : 25
		
    },
    {
        "id": 12,
        "name": "Test Product457",
        "price": 172.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 13,
        "name": "Test Product15",
        "price": 100.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
		"discount" : 12
    },
    {
        "id": 14,
        "name": "Test Product33",
        "price": 99.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
		"discount" : 12
    },
    {
        "id": 15,
        "name": "Test Product85",
        "price": 87.50,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 16,
        "name": "Test Product63",
        "price": 57.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 1",
		"discount" : 29
    },
    {
        "id": 17,
        "name": "Test Product74",
        "price": 10.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 18,
        "name": "Test Product102",
        "price": 412.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 3",
		"discount" : 56
    },
    {
        "id": 19,
        "name": "Test Product358",
        "price": 112.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 20,
        "name": "Test Product568",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 5",
		"discount" : 15
    },
    {
        "id": 21,
        "name": "Test Product475",
        "price": 52.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 22,
        "name": "Test Product28",
        "price": 32.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 23,
        "name": "Test Product1405",
        "price": 12.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 24,
        "name": "Test Product389",
        "price": 584.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 1",
		"discount" : 0
    },
    {
        "id": 25,
        "name": "Test Product555",
        "price": 67.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
    "discount" : 0
    },
    {
        "id": 26,
        "name": "Test Product444",
        "price": 132.50,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 27,
        "name": "Test Product333",
        "price": 42.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 2",
		"discount" : 8
    }
]


 // Product Table


                             var table = document.getElementById('product-table');
data.forEach(function(object) {
  var tr = document.createElement('tr');
  var but = "<button type='button' onclick='addToCart("+object.id+")' style='width:100%; background-color: green;'>Add to Cart</button>";
  tr.innerHTML = '<td>' + object.id + '</td>' +
    '<td>' + object.name + '</td>' +
    '<td>' + object.price + '</td>'+
    '<td>' + object.tags + '</td>'+
    '<td>' + object.vendor + '</td>'+
    '<td>' + but + '</td>' ;

  table.appendChild(tr);
});


//Shopping List...


var cartList = []
function disPercentage(discount, price) {
    var discountPrice = (discount / 100 )*price;
    total = price - discountPrice;
    return total;
   }// console.log(disPercentage());
function addToCart(id) {
    console.log(id)
    cartList.push(data[id - 1]);
    var table = document.getElementById('shopping-cart');
    table.innerHTML = `<tr id="shopcart-heading">
    <th>#</th>
    <th>Product Name</th>
    <th>Original Price</th>
    <th>Discount %</th>
    <th>Discount price</th>
    <th>Vendor</th>
    <th>Remove cart</th>
  </tr>`
  totalPrice = []
    for(let i = 0; i < cartList.length; i++) {
        var tr = document.createElement('tr');
        var but = "<button type='button' class='btnclr'  style='width:100%; background-color: red;' onclick='removeCart("+ i +")'>Remove from Cart</button>";
        let object=cartList[i];
        let discountPrice = disPercentage(object.discount, object.price);
        tr.innerHTML = '<td>' + object.id + '</td>' +
            '<td>' + object.name + '</td>' +
            '<td>' + object.price + '</td>'+
            '<td>' + object.discount + '</td>'+
            '<td>' + discountPrice + '</td>'+
            '<td>' + object.vendor + '</td>'+
            '<td>' + but + '</td>' ;
        table.appendChild(tr);
        totalPrice.push(discountPrice);
        }
        total = 0;
        for(i=0; i<totalPrice.length; i++){
          total = total + totalPrice[i] 
        }
        
        console.log(total);

        document.getElementById('total-price').innerText = total;
}


//Shopping Cart//
function removeCart(id){
    console.log(id )
    cartList.splice(id, 1);
    var table = document.getElementById('shopping-cart');
    table.innerHTML = `<tr id="shopcart-heading">
    <th>#</th>
    <th>Product Name</th>
    <th>Original Price</th>
    <th>Discount %</th>
    <th>Discount price</th>
    <th>Vendor</th>
    <th>Remove cart</th>
  </tr>`
  totalPrice = []
  console.log(cartList)
  for(let i = 0; i < cartList.length; i++) {
    var tr = document.createElement('tr');
    var but = "<button type='button' class='btnclr'  style='width:100%; background-color: red;' onclick='removeCart("+ i +")'>Remove from Cart</button>";
    
    let object=cartList[i];
    let discountPrice = disPercentage(object.discount, object.price);
    tr.innerHTML = '<td>' + object.id + '</td>' +
        '<td>' + object.name + '</td>' +
        '<td>' + object.price + '</td>'+
        '<td>' + object.discount + '</td>'+
        '<td>' + discountPrice + '</td>'+
        '<td>' + object.vendor + '</td>'+
        '<td>' + but + '</td>' ;
    table.appendChild(tr);
    totalPrice.push(discountPrice);
    }
    total = 0;
    for(i=0; i<totalPrice.length; i++){
      total = total + totalPrice[i] 
    }
    
    console.log(total);
    document.getElementById('total-price').innerHTML =  total;
}
var totalPrice = [];