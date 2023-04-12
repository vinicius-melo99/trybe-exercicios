const chai = require('chai');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];
describe('Usando o método GET em /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function() {
    sinon.restore();
  });
  it('Retorna a lista completa de chocolates', async function () {
    sinon.stub(fs.promises, 'readFile')
    .resolves(mockFile)

    const response = await chai
      .request(app)
      .get('/chocolates');
    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
  it('Retorna o chocolate Mounds', async function () {
    sinon.stub(fs, 'readFile')
      .resolves(mockFile);
    const response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    sinon.restore();
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    sinon.restore();
  });
});

describe('Usando o metodo GET em /chocolates/total para obter a quantidade total de chocolates', function(){
  it("Retorna a quantidade total de chocolates = 4", async function() {
    sinon.stub(fs, 'readFile').resolves(mockFile);
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.deep.equals({
      "totalChocolates": 4
    });
    sinon.restore();
  });
});

describe('Usando o metodo GET em /chocolates/search, pesquisa de chocolates por nome', function(){
  it("Ao passar 'Mo' no parâmetro, retorna os resultados esperados:", async function() {
    const expectedResponse = [
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ];

    sinon.stub(fs, 'readFile').resolves(mockFile);
    const response = await chai.request(app).get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.deep.equals(expectedResponse);
    sinon.restore();
  });

  it("Ao passar 'ZZZ' no parâmetro, retorna um array vazio e código 404: ", async function() {
    sinon.stub(fs, 'readFile').resolves(mockFile);
    const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

    expect(response.status).to.be.equals(404);
    expect(response.body).to.deep.equals([]);
    sinon.restore();
  });
});