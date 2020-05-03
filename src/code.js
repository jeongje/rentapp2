const ss = SpreadsheetApp.getActiveSpreadsheet()


function onOpen(e) {

    SpreadsheetApp.getUi()
        .createMenu("입력 도구")
        .addItem("입주자 입력", "tenantSidebar")
        .addItem("계약 입력", "contractSidebar")
        .addItem("입금내역 입력", "paymentSidebar")
        .addItem("건물 입력", "buildingSidebar")
        .addToUi();

}

function loadTenant() {

    const ws = ss.getSheetByName("입주자");

    let tenantList = ws.getRange(2, 1, ws.getRange("C2").getDataRegion().getLastRow() - 1, 4).getValues();

    let htmlArrayList = tenantList.map(function (tenant) {
        let optionList = "<option>" + tenant[0] + " " + tenant[2] + " " + tenant[3].slice(-4) + "</option>";
        return optionList
    }).join("");

    return htmlArrayList;

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