//import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "http://petshoptocadasraposas.com.br",
  consumerKey: "ck_7827b0e590d572e671b187b63765ba8545a4b077",
  consumerSecret: "cs_4ec3d70b4a2631884bb4b7b4740822135dac4121",
  version: "wc/v3"
});
const Excel = require('exceljs');

const deparaWorkbook = new Excel.Workbook();
const productsWorkbook = new Excel.Workbook();

var dePara = [];

// const productsFileName = './assets/2020-10-14_lista_produtos.xlsx'
const deParaFileName = './assets/DEPARA_PRODUTOS.xlsx'

deparaWorkbook.xlsx.readFile(deParaFileName).then(() => {
  var worksheet = deparaWorkbook.getWorksheet("DEPARA");
  var row = null;
  var idWooList = null
  var quantityList = null

  var stockQuantityList = null;
  idWooList = worksheet.getColumn(2).values 
  quantityList = worksheet.getColumn(4).values 

  for (var numberReg = 2; numberReg <= idWooList.length; numberReg++ ){
    dePara.push([idWooList[numberReg],quantityList[numberReg]])
  }
  updateQuantity();
  }
)

async function updateQuantity(){
  var requestBody = null
  for(var product = 0;product <= dePara.length;product++ ) {
    requestBody = JSON.stringify({
      manage_stock: true,
      stock_quantity: dePara[product][1]
    })
    requestBody = JSON.parse(requestBody)
    await api.put(`products/${dePara[product][0]}`,requestBody)
    .then((response) => {
          // Successful request
          console.log("Response Status:", response.status);
          console.log("Response Headers:", response.headers);
          console.log("Response Data:", response.data);
          console.log("Total of pages:", response.headers['x-wp-totalpages']);
          console.log("Total of items:", response.headers['x-wp-total']);
        })
        .catch((error) => {
          // Invalid request, for 4xx and 5xx statuses
          console.log("Response Status:", error.response.status);
          console.log("Response Headers:", error.response.headers);
          console.log("Response Data:", error.response.data);
        })
        .finally(() => {
          // Always executed.
        });

  }
}

