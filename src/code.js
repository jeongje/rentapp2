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

function submitTenant(tenantInfo) {

    const ws = ss.getSheetByName("입주자");
    let id = ws.getLastRow();
    let date = Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd");

    ws.appendRow([
        id,
        date,
        tenantInfo.name,
        tenantInfo.phone,
        tenantInfo.memo,
    ]);

}

function submitContract(contractInfo) {

    const ws = ss.getSheetByName("계약");
    let id = ws.getLastRow();
    let date = Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd");

    ws.appendRow([
        id,
        date,
        contractInfo.tenantName,
        contractInfo.building,
        contractInfo.unit,
        contractInfo.deposit,
        contractInfo.monthly,
        contractInfo.maintenaceFee,
        contractInfo.startDate,
        contractInfo.endDate,
        contractInfo.memo,
    ]);

}

function submitPayment(paymentInfo) {

    const ws = ss.getSheetByName("입금내역");
    let id = ws.getLastRow();
    let date = Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd");

    ws.appendRow([
        id,
        date,
        paymentInfo.tenantName,
        paymentInfo.paymentDate,
        paymentInfo.amount,
        paymentInfo.memo,
    ]);

}

function submitBuilding(buildingInfo) {

    const ws = ss.getSheetByName("건물");
    let id = ws.getLastRow();
    let date = Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd");

    ws.appendRow([
        id,
        date,
        buildingInfo.buildingName,
        buildingInfo.address,
        buildingInfo.memo,
    ]);

}