
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


function modifySidebar() {

    let template = HtmlService.createTemplateFromFile("modify");
    let html = template.evaluate();

    html.setTitle("계약 수정");
    SpreadsheetApp.getUi().showSidebar(html);

}


function buildingSidebar() {

    let template = HtmlService.createTemplateFromFile("building");
    let html = template.evaluate();

    html.setTitle("건물 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}


