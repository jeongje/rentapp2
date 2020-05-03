function insertId(sheetName) {

    const ws = ss.getSheetByName(sheetName);
    const a2 = ws.getRange("A2");
    const aColumn = a2.getDataRegion(SpreadsheetApp.Dimension.ROWS);
    const aValues = aColumn.getValues();
    const aLastRow = aColumn.getLastRow();

    let id = 1;

    if (a2.getValue !== "") {
        id = Number(aValues[aLastRow-1]) + 1;
    };

    return id;
}


function submitTenant(tenantInfo) {

    const ws = ss.getSheetByName("입주자");

    let id = insertId("입주자");
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

    let id = insertId("계약");
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

    let id = insertId("입금내역");
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

    let id = insertId("건물");
    let date = Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd");

    ws.appendRow([
        id,
        date,
        buildingInfo.buildingName,
        buildingInfo.address,
        buildingInfo.memo,
    ]);

}