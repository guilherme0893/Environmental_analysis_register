import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
import app from '../../../app';
// @ts-ignore
import SamplePoints from '../../../models/samplePoints';
import { samplePointMock } from '../../mocks/samplePoints/samplePointsMock';
// import connection from '../../../models/connection';
// import recreateDatabase from '../../recreateDB';

chai.use(chaiHttp);
const { expect } = chai;

const samplePointsModel = new SamplePoints();

describe('Tests the POST / route', () => {
  beforeAll(async () => {
    sinon
      .stub(samplePointsModel, 'create')
      .resolves({ ...samplePointMock });
  });

  afterAll(() => {
    (samplePointsModel.create as sinon.SinonStub).restore();
  });

  it('it returns an error if the samples exists and status', async () => {
    const response = await chai.request(app).post('/samples').send(samplePointMock);
    expect(response.status).to.be.equal(409);
    expect(response.text).to.be.deep.equal('{"message":"Sample already registered"}');
  });
});
