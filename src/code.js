const ss = SpreadsheetApp.getActiveSpreadsheet()


function onOpen(e) {

    SpreadsheetApp.getUi()
        .createMenu("입력 도구")
        .addItem("계약 입력", "contractSidebar")
        .addItem("입금내역 입력", "paymentSidebar")
        .addItem("건물 입력", "buildingSidebar")
        .addToUi();

}



function loadTenant() {
    // autocomplete를 이용한 입주자 목록 전달 방식

    const ws = ss.getSheetByName("계약");

    let tenantList = ws.getRange(2, 1, ws.getRange("C2").getDataRegion().getLastRow() - 1, 4).getValues();

    let dataOption = {}
    tenantList.forEach(function (tenant) {
        let optionList = tenant[0] + "_" + tenant[2] + "_" + tenant[3].slice(-4);
        dataOption[optionList] = null;
    });

    return dataOption;

}



function loadBuilding() {

    const ws = ss.getSheetByName("건물");

    let buildingList = ws.getRange(2, 3, ws.getRange("C2").getDataRegion().getLastRow() - 1, 1).getValues();

    let htmlArrayList = buildingList.map(function (building) {
        let optionList = "<option>" + building[0] + "</option>";
        return optionList
    }).join("");

    return htmlArrayList;

}