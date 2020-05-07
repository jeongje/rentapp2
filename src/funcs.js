function insertId(sheetName) {

    const ws = ss.getSheetByName(sheetName);
    const a2 = ws.getRange("A2");
    const aColumn = a2.getDataRegion(SpreadsheetApp.Dimension.ROWS);
    const aValues = aColumn.getValues();
    const aLastRow = aColumn.getLastRow();

    let id = 1;

    if (a2.getValue !== "") {
        id = Number(aValues[aLastRow - 1]) + 1;
    };

    return id;
}


function submitContract(contractInfo) {

    const ws = ss.getSheetByName("계약");

    let id = insertId("계약");
    let date = Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd");
    const startDateValue = 'INDIRECT("R[0]C[8]",FALSE)';
    const endDateValue = 'INDIRECT("R[0]C[9]",FALSE)';
    const conditionFormula = '=ifs(\
        today()<' + startDateValue + ',"입주예정",\
        and(' + startDateValue + '<=today(),today()<=' + endDateValue + '),"입주중",\
        ' + endDateValue + '<today(),"계약종료")';

    ws.appendRow([
        id,
        date,
        conditionFormula,
        contractInfo.name,
        contractInfo.phone,
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
    let tenantNameValues = paymentInfo.tenantNameValues.split("_");
    let tenantId = tenantNameValues[0];
    let tenantName = tenantNameValues[1];

    ws.appendRow([
        id,
        date,
        tenantId,
        tenantName,
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


function modifyContract(contractInfo) {

    const ws = ss.getSheetByName("계약");
    let contractData = ws.getRange(2, 1, ws.getRange("A2").getDataRegion().getLastRow() - 1, 13).getValues();
    // let contractRange = ws.getRange(2, 1, ws.getRange("A2").getDataRegion().getLastRow() - 1, 13);
    let row = contractInfo.row;

    Logger.log(contractData[row]);

    // let unitCell = contractData[row][6];
    // let depositCell = contractData[row][7];
    // let monthlyCell = contractData[row][8];
    // let maintenaceFeeCell = contractData[row][9];
    // let startDateCell = contractData[row][10];
    // let endDateCell = contractData[row][11];
    // let memoCell = contractData[row][12];


    // unitCell.setValue(contractInfo.unit);
    // depositCell.setValue(contractInfo.deposit);
    // monthlyCell.setValue(contractInfo.monthly);
    // maintenaceFeeCell.setValue(contractInfo.maintenaceFee);
    // startDateCell.setValue(contractInfo.startDate);
    // endDateCell.setValue(contractInfo.endDate);
    // memoCell.setValue(contractInfo.memo);


    // let selectedRange = ws.getRange(row, 1, 1, 13);
    // let selectedData = ws.getRange(row, 1, 1, 13).getValues();

    // let id = selectedData[0][0];
    // let id = constractData[row][0];
    // let date = constractData[row][1];



}