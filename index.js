


checkbox.addEventListener("click", () => {
    const basicNum = document.getElementById('basicNum');
    const professionalNum = document.getElementById('professionalNum');
    const masterNum = document.getElementById('masterNum');
    const percentDiscount = 20;


    let monthPriceBasic = 19.99;
    let monthPriceProf = 24.99;
    let monthPriceMaster = 39.99;

    const yearPriceBasic = monthPriceBasic * 12 / 100 * percentDiscount;
    const yearPriceProf = monthPriceProf * 12 / 100 * percentDiscount;
    const yearPriceMaster = monthPriceMaster * 12 / 100 * percentDiscount;


    if (checkbox.checked == true) {
        return basicNum.innerHTML = monthPriceBasic,
            professionalNum.innerHTML = monthPriceProf,
            masterNum.innerHTML = monthPriceMaster
    } else {
        return basicNum.innerHTML = parseInt(yearPriceBasic),
            professionalNum.innerHTML = parseInt(yearPriceProf),
            masterNum.innerHTML = parseInt(yearPriceMaster)
    }
});

