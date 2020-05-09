const ss = SpreadsheetApp.getActiveSpreadsheet()


function onOpen(e) {

    SpreadsheetApp.getUi()
        .createMenu("입력 도구")
        .addItem("계약 입력", "contractSidebar")
        .addItem("입금내역 입력", "paymentSidebar")
        .addItem("입주자별 입금내역", "paymentHistorySidebar")
        .addItem("계약 수정", "contractModifySidebar")
        .addItem("입금내역 수정", "paymentModifySidebar")
        .addItem("건물 입력", "buildingSidebar")
        .addToUi();

}



function loadTenant() {
    // autocomplete를 이용한 입주자 목록 전달 방식

    const ws = ss.getSheetByName("계약");

    let tenantList = ws.getRange(2, 1, ws.getRange("C2").getDataRegion().getLastRow() - 1, 5).getValues();

    let dataOption = {}
    tenantList.forEach(function (tenant) {
        const tenantId = tenant[0];
        const tenantName = tenant[3];
        const tenantPhone = tenant[4].slice(-4);

        let optionList = tenantId + "_" + tenantName + "_" + tenantPhone;
        dataOption[optionList] = null;
    });

    return dataOption;

}

function loadPayment() {
    // autocomplete를 이용한 입금내역 목록 전달 방식

    const ws = ss.getSheetByName("입금내역");

    let paymentList = ws.getRange(2, 1, ws.getRange("C2").getDataRegion().getLastRow() - 1, 7).getValues();

    let dataOption = {}
    paymentList.forEach(function (payment) {
        const paymentId = payment[0];
        const paymentName = payment[3];
        const paymentDate = Utilities.formatDate(new Date(payment[4]), "GMT+9", "yyyy-MM-dd");

        let optionList = paymentId + "_" + paymentName + "_" + paymentDate;
        dataOption[optionList] = null;
    });

    return dataOption;

}



function loadBuilding() {

    const ws = ss.getSheetByName("건물");

    let buildingList = ws.getRange(2, 3, ws.getRange("C2").getDataRegion().getLastRow() - 1, 1).getValues();

    let htmlArrayList = buildingList.map(function (building) {
        const buildingId = building[0];

        let optionList = "<option>" + buildingId + "</option>";
        return optionList
    }).join("");

    return htmlArrayList;

}


function bringContract(tenantValues) {

    const ws = ss.getSheetByName("계약");
    let contractData = ws.getRange(2, 1, ws.getRange("A2").getDataRegion().getLastRow() - 1, 13).getValues();

    let tenantValuesList = tenantValues.split('_');
    let tenantId = tenantValuesList[0];
    let tenantName = tenantValuesList[1];

    // id랑 이름이 같은 행의 값들을 넘겨준다. contractData가 2행부터 시작해서 행-1의 값이 i다.
    for (var i = 0; i < contractData.length; i++) {

        if (contractData[i][0] == tenantId && contractData[i][3] == tenantName) {
            return {
                row: i,
                info: JSON.stringify(contractData[i]),
            };
        };
    }
}


function bringPayment(paymentValues) {

    const ws = ss.getSheetByName("입금내역");
    let paymentData = ws.getRange(2, 1, ws.getRange("A2").getDataRegion().getLastRow() - 1, 7).getValues();

    let paymentValuesList = paymentValues.split('_');
    let paymentId = paymentValuesList[0];
    let paymentName = paymentValuesList[1];


    // id랑 이름이 같은 행의 값들을 넘겨준다. paymentData가 2행부터 시작해서 행-1의 값이 i다.
    for (var i = 0; i < paymentData.length; i++) {
        
        if (paymentData[i][0] == paymentId && paymentData[i][3] == paymentName) {
            return {
                row: i,
                info: JSON.stringify(paymentData[i]),
            };
        };

    }
}