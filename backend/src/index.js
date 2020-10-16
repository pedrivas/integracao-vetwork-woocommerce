const Excel = require('exceljs');

const deparaWorkbook = new Excel.Workbook();
const productsWorkbook = new Excel.Workbook();

var dePara = {};

const productsFileName = './assets/2020-10-14_lista_produtos.xlsx'
const deParaFileName = './assets/DEPARA_PRODUTOS.xlsx'

deparaWorkbook.xlsx.readFile(deParaFileName).then(() => {
  var worksheet = deparaWorkbook.getWorksheet("DEPARA");
  var row = null;
  var idVetworkList = null;
  var stockQuantityList = null;
  idVetworkList = worksheet.getColumn(1).values 
  stockQuantityList = worksheet.getColumn(7).values 

  }
)

productsWorkbook.xlsx.readFile(productsFileName).then(() => {
  var worksheet = productsWorkbook.getWorksheet("Produtos");
  var row = null;
  var idVetworkList = null;
  var stockQuantityList = null;
//worksheet.getRow(8)._cells
  idVetworkList = worksheet.getColumn(1).values 
  stockQuantityList = worksheet.getColumn(7).values 

  }
)