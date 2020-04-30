
function tenantSidebar() {

    let template = HtmlService.createTemplateFromFile("tenant");
    let html = template.evaluate();

    html.setTitle("입주자 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}


function contractSidebar() {

    let template = HtmlService.createTemplateFromFile("contract");
    let html = template.evaluate();

    html.setTitle("계약 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}


function paymentSidebar() {

    let template = HtmlService.createTemplateFromFile("payment");
    let html = template.evaluate();

    html.setTitle("입금내역 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}


function buildingSidebar() {
    
    let template = HtmlService.createTemplateFromFile("building");
    let html = template.evaluate();

    html.setTitle("건물 입력");
    SpreadsheetApp.getUi().showSidebar(html);

}