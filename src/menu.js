function contractSidebar() {

    let template = HtmlService.createTemplateFromFile("contract");
    template.tenantList = loadTenant();
    template.buildingList = loadBuilding();
    let html = template.evaluate();

    html.setTitle("계약 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}


function paymentSidebar() {

    let template = HtmlService.createTemplateFromFile("payment");
    template.tenantList = loadTenant();
    let html = template.evaluate();

    html.setTitle("입금내역 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}


function paymentHistorySidebar() {

    let template = HtmlService.createTemplateFromFile("paymenthistory");
    let html = template.evaluate();

    html.setTitle("입주자별 입금내역");
    SpreadsheetApp.getUi().showSidebar(html);

}


function contractModifySidebar() {

    let template = HtmlService.createTemplateFromFile("contractmodify");
    let html = template.evaluate();

    html.setTitle("계약 수정");
    SpreadsheetApp.getUi().showSidebar(html);

}


function paymentModifySidebar() {

    let template = HtmlService.createTemplateFromFile("paymentmodify");
    let html = template.evaluate();

    html.setTitle("입금내역 수정");
    SpreadsheetApp.getUi().showSidebar(html);

}



function buildingSidebar() {

    let template = HtmlService.createTemplateFromFile("building");
    let html = template.evaluate();

    html.setTitle("건물 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}