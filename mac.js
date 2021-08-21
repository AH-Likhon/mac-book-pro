// function getBestPrice(sixteenGb) {
//     const bestPrice = document.getElementById('best-price');
//     const bestPriceValue = bestPrice.innerText;
//     if (sixteenGb == true) {
//         bestPrice.innerText = parseInt(bestPriceValue);
//     } else {
//         bestPrice.innerText = parseInt(bestPriceValue) + 100;
//     }
//     // console.log(bestPriceValue);
//     // return bestPrice;
// }




function getExtraMemoryCost(memoryCost) {
    const memoryPrice = document.getElementById('extra-memory-cost');
    let memoryPriceValue = memoryPrice.innerText;
    if (memoryCost == true) {
        memoryPriceValue = parseInt(memoryPriceValue) + 180;
    } else if (memoryPriceValue > 0) {
        memoryPriceValue = parseInt(memoryPriceValue) - 180;
    }

    memoryPrice.innerText = memoryPriceValue;

    const sixteenBtn = document.getElementById('sixteen-gb-memory');
    if (memoryPriceValue == 180) {
        sixteenBtn.setAttribute('disabled', true);
    } else {
        sixteenBtn.removeAttribute('disabled');
    }

    calculateTotalCost();
}

function getExtraStorageCost(storageCost, isOneTB) {
    const storagePrice = document.getElementById('extra-storage-cost');
    let storagePriceValue = storagePrice.innerText;

    if (storageCost == true && isOneTB == true) {
        storagePriceValue = parseInt(storagePriceValue) + 180;
    } else if (storageCost == true && isOneTB == false) {
        storagePriceValue = parseInt(storagePriceValue) + 100;
    } else if (storagePriceValue > 0) {
        if (storagePriceValue % 100 == 0) {
            storagePriceValue = parseInt(storagePriceValue) - 100;
        } else if (storagePriceValue % 180 == 0) {
            storagePriceValue = parseInt(storagePriceValue) - 180;
        } else {
            storagePriceValue = 0;
        }
    }

    return storagePrice.innerText = storagePriceValue;

}



function getDeliveryCharge(deliveryCost) {
    const deliveryCharge = document.getElementById('delivery-charge-cost');
    let deliveryChargeValue = deliveryCharge.innerText;

    if (deliveryCost == true) {
        deliveryChargeValue = parseInt(deliveryChargeValue) + 20;
    } else if (deliveryChargeValue > 0) {
        deliveryChargeValue = parseInt(deliveryChargeValue) - 20;
    }

    deliveryCharge.innerText = deliveryChargeValue;

    const chargeableBtn = document.getElementById('chargeable-delivery');
    if (deliveryChargeValue == 20) {
        chargeableBtn.setAttribute('disabled', true);
    } else {
        chargeableBtn.removeAttribute('disabled');
    }

    calculateTotalCost();

}

// memory event handler
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    // getBestPrice(true);
    getExtraMemoryCost(false);
    // getExtraStorageCost(true);
    // getDeliveryCharge(true);
})
document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    // getBestPrice(true);
    getExtraMemoryCost(true);
    // getExtraStorageCost(true);
    // getDeliveryCharge(true);
})





// storage event handler
document.getElementById('first-ssd').addEventListener('click', function () {
    // getBestPrice(false);
    // getExtraMemoryCost(false);
    getExtraStorageCost(false, false);
    const secondSSD = document.getElementById('second-ssd');
    const thirdSSD = document.getElementById('third-ssd');
    secondSSD.removeAttribute('disabled');
    thirdSSD.removeAttribute('disabled');

    calculateTotalCost();

    // if (firstSSDCost == 0) {

    // }
    // getDeliveryCharge(false);
})
document.getElementById('second-ssd').addEventListener('click', function () {
    // getBestPrice(true);
    // getExtraMemoryCost(false);
    const secondSsdCost = getExtraStorageCost(true, false);
    const secondSSD = document.getElementById('second-ssd');

    // decrease storage cost
    if (secondSsdCost == 100) {
        secondSSD.setAttribute('disabled', true);
    } else {
        secondSSD.removeAttribute('disabled');
    }

    calculateTotalCost();
})
document.getElementById('third-ssd').addEventListener('click', function () {
    // getBestPrice(true);
    // getExtraMemoryCost(true, 180);

    const thirdSsdCost = getExtraStorageCost(true, true);
    const thirdSSD = document.getElementById('third-ssd');

    // decrease storage cost
    if (thirdSsdCost == 180) {
        thirdSSD.setAttribute('disabled', true);
    } else {
        thirdSSD.removeAttribute('disabled');
    }

    calculateTotalCost();
})

// delivery charge event handler
document.getElementById('free-delivery').addEventListener('click', function () {
    getDeliveryCharge(false);
})
document.getElementById('chargeable-delivery').addEventListener('click', function () {
    getDeliveryCharge(true);
})


// calculate total cost
function getInputValue(input) {
    const inputNumber = document.getElementById(input + '-cost');
    const inputNumberValue = parseInt(inputNumber.innerText);
    return inputNumberValue;
}
function calculateTotalCost() {
    const bestPrice = getInputValue('best-price');
    const extraMemoryCost = getInputValue('extra-memory');
    const extrastorageCost = getInputValue('extra-storage');
    const deliveryChargeCost = getInputValue('delivery-charge');

    const total = bestPrice + extraMemoryCost + extrastorageCost + deliveryChargeCost;


    document.getElementById('total-price').innerText = total;
}