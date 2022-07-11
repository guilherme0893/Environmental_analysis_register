import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
import app from '../../../app';
// @ts-ignore
import SamplePoints from '../../../models/samplePoints';
import { samplePointMock } from '../../mocks/samplePoints/samplePointsMock';

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
    samplePointsModel.deleteSample(samplePointMock.name);
  });

  it('creates a new sample', async () => {
    const response = await chai.request(app).post('/samples').send(samplePointMock);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(samplePointMock);
  });
});
