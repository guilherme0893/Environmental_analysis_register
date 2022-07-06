import app from "../../app";
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
chai.use(chaiHttp);
import samplePoints from '../../models/samplePoints';
import { samplePointMock } from '../mocks/samplePointsMock';
const { expect } = chai;
import connection from "../../models/connection";
import recreateDatabase from '../recreateDB';

const samplePointsModel = new samplePoints();

describe('Tests the POST / route', () => {

  beforeEach(async () => {
    await recreateDatabase(connection);
    sinon
      .stub(samplePointsModel, 'create')
      .resolves({ ...samplePointMock });
  });

  afterEach(()=>{
    (samplePointsModel.create as sinon.SinonStub).restore();
    connection.end();
  });

  it('it creates a new sample and returns a status 201', async () => {
    const response = await chai.request(app).post('/').send(samplePointMock);
    expect(response.status).to.be.equal(201);
    // expect(response.body).to.be.deep.equal(samplePointMock);
  });
});
