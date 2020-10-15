const Excel = require('exceljs');

const workbook = new Excel.Workbook();

const filename = './assets/2020-10-14_lista_produtos.xlsx'
workbook.xlsx.readFile(filename).then(function() {
  var worksheet = workbook.getWorksheet("Produtos");

  var row = null;
  var idVetworkList = null;
  var stockQuantityList = null;
//worksheet.getRow(8)._cells
  idVetworkList = worksheet.getColumn(1).values 
  stockQuantityList = worksheet.getColumn(7).values 

  }
)