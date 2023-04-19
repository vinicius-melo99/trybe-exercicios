const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
    {
      id: 1,
      first_name: "Luke",
      last_name: "Skywalker",
      email: "luke.skywalker@trybe.com",
      phone: "851 678 4453"
    },
    {
      id: 3,
      first_name: "Vinicius",
      last_name: "Melo",
      email: "vinicius.melo@trybe.com",
      phone: "11 11111-1111"
    }
]

describe('Testando os endpoints de people', function() {
  it('Testando o cadastro de uma pessoa', async function() {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/people')
      .send({
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke.skywalker@trybe.com',
        phone: '851 678 4453',
      });
    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({
      message: 'Pessoa com id 42 cadastrada com sucesso'
    });
  });

  it('Testando a listagem de todas as pessoas', async function() {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people')
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a listagem da pessoa com id 1', async function() {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);

    const response = await chai
      .request(app)
      .get('/people/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([peopleList[0]]);
  });

  it('Retorna a mensagem "pessoa não encontrada", caso o id informado não esteja cadastrado', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai
      .request(app)
      .get('/people/2')

    expect(response.status).to.be.equal(404)
    expect(response.body).to.deep.equal({ message: 'Pessoa não encontrada' })
  });

  afterEach(sinon.restore);
});