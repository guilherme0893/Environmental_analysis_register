/* eslint-disable max-lines-per-function */
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
import app from '../../../app';
// @ts-ignore
import SamplePoints from '../../../models/samplePoints';
import {
  samplePointMock, completeSamplePointsMock,
} from '../../mocks/samplePoints/samplePointsMock';

chai.use(chaiHttp);
const { expect } = chai;

const samplePointsModel = new SamplePoints();

type samplePointsType = {
  id: number;
  name: string;
  xCoordinate: number;
  yCoordinate: number;
}

describe('Tests the POST / route', () => {
  beforeAll(async () => {
    sinon
      .stub(samplePointsModel, 'getAll')
      .resolves({ ...completeSamplePointsMock } as samplePointsType[]);
    sinon
      .stub(samplePointsModel, 'create')
      .resolves({ ...samplePointMock } as samplePointsType);
  });

  afterAll(() => {
    (samplePointsModel.create as sinon.SinonStub).restore();
    (samplePointsModel.getAll as sinon.SinonStub).restore();
    samplePointsModel.deleteSample(samplePointMock.name);
  });

  it('creates a new sample', async () => {
    const response = await chai.request(app).post('/samples').send(samplePointMock);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(samplePointMock);
  });

  it('returns status 409 and the message "Sample already registered"', async () => {
    const getAllResponse = await chai.request(app).get('/samples');
    expect(getAllResponse.body[0].name).to.be.equal('ponto 1');
    const createResponse = await chai.request(app).post('/samples').send(samplePointMock);
    expect(createResponse.status).to.be.equal(409);
    expect(createResponse.body).to.have.property('message');
  });
});
