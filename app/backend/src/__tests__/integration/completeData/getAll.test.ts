/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
// @ts-ignore
import app from '../../../app';
import CompleteData from '../../../models/completeData';
import fullCompleteDataMock from '../../mocks/completeData/completeDataMock';

chai.use(chaiHttp);
const { expect } = chai;

const completeDataModel = new CompleteData();

describe('Tests the GET /parameters completeData', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(completeDataModel, 'getAll')
      .resolves({ ...fullCompleteDataMock });
  });

  afterEach(() => {
    (completeDataModel.getAll as sinon.SinonStub).restore();
  });

  it('returns status 200', async () => {
    const response = await chai.request(app).get('/completeData');
    expect(response.status).to.be.equal(200);
  });

  it('returns all properties with at least one element', async () => {
    const response = await chai.request(app).get('/completeData');
    expect(response.body[0]).to.have.property('name');
    expect(response.body[0]).to.have.property('parameter');
    expect(response.body[0]).to.have.property('parameterUnity');
    expect(response.body[0]).to.have.property('parameterValue');
    // expect(response.body[0]).to.have.property('x_coordinate');
    expect(response.body[0]).to.have.property('y_coordinate');
    expect(response.body[0]).to.have.property('samplingDate');
    expect(response.body.length).to.be.greaterThanOrEqual(1);
  });
});
