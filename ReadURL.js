// purchaseNumber=06FFCB04-BF0F-476E-97D4-C91008D85058
// customerNumber=1000182
// orderNumber
// country=NO
// currency=NOK
// totalValue=99.00
// shippingFee=99.00
// paymentFee=0.00
// charge=0.00
// discount=0.00
// subscriptions=1

// Get user's ip address
var currentIP;

$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
        function(json) {
            currentIP = json.ip;
            return currentIP;
        }
    );