//function calculateTotalPrice(quantily = 2, price = 15000000){

    //const result = quantily * price;
    //const formatResult = result.toLocaleString ("ru-RU");
    //console.log(result.toLocaleString ("ru-RU"));
    //const str = "Стоимость покупки "
    //return result;
    //alert(str + formatResult);
//}

//продвинутый вариант
function calculateTotalPrice(quantily = 2, price = 15000000){
    alert(`Стоимость покупки: ${(quantily*price).toLocaleString("ru-Ru")}`)
}



