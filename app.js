const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    //tạo một list dữ liệu với vòng lặp
    console.log(button,index)
    button.addEventListener("click", function(event){
        // //thêm sự kiện mới cho đối tượng
        // var btnItem = event.target
        // //target yếu tố mà sự kiện đã được kích hoạt
        // var product = btnItem.parentElement
        // //parent elememnt
        // //lấy element ở button itemps
        // var productImg = product.querySelector("img").src
        // var productName = product.querySelector("H1").innerText
        // var productPrice = product.querySelector("span").innerText
        // // console.log(product);
        // addcart(productPrice, productImg, productName)
        // //gọi lại đối tượng addcart

        var productImg = this.dataset.img;
        var productName = this.dataset.name;
        var productPrice = this.dataset.price;
        // console.log(productImg)
        // console.log(productName)
        // console.log(productPrice)

        addcart(productPrice, productImg, productName)
    })
})



function addcart(productPrice, productImg, productName){
    var addtr = document.createElement("tr")
    // tạo một giá trị tr mới ở tr
    var cartItem = document.querySelectorAll("tbody tr")
    // lấy giá trị tất cả sản phẩm ở tbody tr
    for (var i = 0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){

            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = `
                    <tr>
                        <td style="display: flex; align-items: center;"><img style="width: 70px;border-radius: 10px;" src="${productImg}"  alt=""><span class="title">${productName}</span></td>
                        <td><p><span class="prices">${productPrice}</span><sup>đ</sup></p></td>
                        <td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
                        <td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td>
                    </tr>
                    `
    addtr.innerHTML = trcontent;
    // in ra giá trị trcontent  
    var cartTable = document.querySelector("tbody")
    //lấy giá trị từ tbody 
    // console.log(cartTable)
    cartTable.append(addtr)
    //thêm thẻ tr vào cuối cùng
    carttotal()
    deleteCart()
    //gọi lại thẻ sau khi tính tổng tiền và xóa dòng 

}

//--------------------totalprice----------------//
    function carttotal (){
        var cartItem = document.querySelectorAll("tbody tr");
        var totalC = 0
        // console.log(cartItem.length)
        for (var i = 0; i<cartItem.length;i++){
            var inputValue = cartItem[i].querySelector('input').value;
            // console.log(inputValue)
            var productPrice =  cartItem[i].querySelector(".prices").innerHTML
            // console.log(productPrice)
            totalA = inputValue * productPrice*1000
            // đưa ra số tiền nghìn 
            // totalB = totalA.toLocaleString('de-DE')
            //  console.log(totalB)
             totalC = totalC + totalA
             //công thức tính tổng total
              //  totalD = totalC.toLocaleString('de-DE')
            //  console.log(totalC)
        }
            var carTotalA = document.querySelector(".price-total span")
            var cartPrice = document.querySelector(".cart-icon span")
            // lấy giá trị tiền ở thẻ cart icon
            carTotalA.innerHTML = totalC.toLocaleString('de-DE')
            // đưa ra dấu chấm mỗi 100.000 đưa ra giá từ totalC
            // cartPrice.innerHTML = totalC.toLocaleString('de-DE')
            inputchange ()
            //gọi lại sự thay đổi trong giá trị 
    }

//--------------------Delete Cart----------------//

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
            productT[i].addEventListener("click", function(event){
                    var cartDelete = event.target
                    var cartitemR = cartDelete.parentElement.parentElement            
                    cartitemR.remove()
                    // dùng thẻ .remove để xóa 1 sự kiện  cart item
                    carttotal ()
                    // console.log(cartitemR)
            })
        }
    }
//---------------------thay đổi tiền mỗi khi tăng số lượng mua hàng------//
    function inputchange (){
        var cartItem = document.querySelectorAll("tbody tr")
        for(var i = 0; i < cartItem.length; i++){
            var inputValue = cartItem[i].querySelector("input")
                inputValue.addEventListener("change", function(){
                    carttotal()
                })
            }
        }
    const cartbtn = document.querySelector(".fa-times")
    const cartshow = document.querySelector(".fa-shopping-cart")
    cartshow.addEventListener("click", function(){
        console.log(cartshow)
        document.querySelector(".cart").style.right ="0"
    })
    cartbtn.addEventListener("click", function(){
        console.log(cartbtn)
        document.querySelector(".cart").style.right ="-100%"
    });
   