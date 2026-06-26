const SHEET_NAME = "Cadastros";

function doPost(e) {
  try {
    const sheet = getSheet();
    const data = JSON.parse(e.postData.contents || "{}");

    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.address || "",
      data.phone || "",
      data.email || "",
      data.companyMember || "",
      data.companyName || "",
      data.companyAddress || ""
    ]);

    return jsonResponse({
      ok: true,
      message: "Cadastro salvo com sucesso."
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      message: error.message
    });
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Endpoint da ACOS ativo."
  });
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Data de envio",
      "Nome completo",
      "Endereço completo",
      "Telefone",
      "E-mail",
      "Faz parte de empresa",
      "Nome da empresa associada",
      "Endereço da empresa"
    ]);
  }

  return sheet;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
