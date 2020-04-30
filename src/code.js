function onOpen(e) {

    SpreadsheetApp.getUi()
        .createMenu("입력 도구")
        .addItem("입주자 입력", "tenantSidebar")
        .addItem("계약 입력", "contractSidebar")
        .addItem("입금내역 입력", "paymentSidebar")
        .addToUi();

}



function tenantSidebar() {

    let template = HtmlService.createTemplateFromFile("tenant");
    let html = template.evaluate();
    html.setTitle("입주자 입력")

    SpreadsheetApp.getUi().showSidebar(html);

}


function contractSidebar() {

    let template = HtmlService.createTemplateFromFile("contract");
    let html = template.evaluate();
    html.setTitle("계약 입력")

    SpreadsheetApp.getUi().showSidebar(html);

}


function paymentSidebar() {

    let template = HtmlService.createTemplateFromFile("payment");
    let html = template.evaluate();
    html.setTitle("입금내역 입력")

    SpreadsheetApp.getUi().showSidebar(html);

}