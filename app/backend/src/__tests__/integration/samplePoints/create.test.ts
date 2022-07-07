/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SamplePoints from '../../../models/samplePoints';
import { samplePointMock } from '../../mocks/samplePointsMock';
// import connection from '../../../models/connection';
// import recreateDatabase from '../../recreateDB';

chai.use(chaiHttp);
const { expect } = chai;

const samplePointsModel = new SamplePoints();

describe('Tests the POST / route', () => {
  beforeEach(async () => {
    // await recreateDatabase(connection);
    sinon
      .stub(samplePointsModel, 'create')
      .resolves({ ...samplePointMock });
  });

  afterEach(() => {
    (samplePointsModel.create as sinon.SinonStub).restore();
    // connection.end();
  });

  it('it creates a new sample and returns a status 201', async () => {
    const response = await chai.request(app).post('/samples').send(samplePointMock);
    expect(response.status).to.be.equal(201);
    // expect(response.body).to.be.deep.equal(samplePointMock);
  });
});
