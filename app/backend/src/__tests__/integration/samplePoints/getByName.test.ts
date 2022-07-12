/* eslint-disable max-lines-per-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
import app from '../../../app';
// @ts-ignore
import SamplePoints from '../../../models/samplePoints';
import { samplePointsMock } from '../../mocks/samplePoints/samplePointsMock';

chai.use(chaiHttp);

const { expect } = chai;

const samplePointsModel = new SamplePoints();

describe('Tests the GET route', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(samplePointsModel, 'getByName')
      .resolves({ ...samplePointsMock });
  });

  afterEach(() => {
    (samplePointsModel.getByName as sinon.SinonStub).restore();
  });
  it('returns one sample and a status 200', async () => {
    const response = await chai.request(app).get('/samples/ponto 1');
    expect(response.status).to.be.equal(200);
    expect(response.body.length).to.be.equal(1);
    expect(response.body[0]).to.have.property('name');
    expect(response.body[0]).to.have.property('x_coordinate');
    expect(response.body[0]).to.have.property('y_coordinate');
  });

  it(`returns the message "Sample not found! Please check the spell or register the sample"
  , if the parameter is not found and the status 404`, async () => {
    const response = await chai.request(app).get('/samples/teste');
    expect(response.status).to.be.equal(404);
    expect(response.body).to.have.property('message');
  });
});
