/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
// @ts-ignore
import app from '../../../app';
import CompleteData from '../../../models/completeData';
import { overlimitCompleteDataMock } from '../../mocks/completeData/completeDataMock';

chai.use(chaiHttp);
const { expect } = chai;

const completeDataModel = new CompleteData();

describe('Tests the GET /overlimitData', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(completeDataModel, 'getOverlimit')
      .resolves({ ...overlimitCompleteDataMock });
  });

  afterEach(() => {
    (completeDataModel.getOverlimit as sinon.SinonStub).restore();
  });

  it('returns status 200 and returns all properties', async () => {
    const response = await chai.request(app).get('/overlimitData');
    expect(response.status).to.be.equal(200);
    expect(response.body[0]).to.have.property('name');
    expect(response.body[0]).to.have.property('parameter');
    expect(response.body[0]).to.have.property('parameterUnity');
    expect(response.body[0]).to.have.property('parameterValue');
    expect(response.body[0]).to.have.property('x_coordinate');
    expect(response.body[0]).to.have.property('y_coordinate');
    expect(response.body[0]).to.have.property('samplingDate');
  });

  it('returns all overlimit parameters', async () => {
    const response = await chai.request(app).get('/overlimitData');
    expect(response.status).to.be.equal(200);
    expect(response.body.length).to.be.equal(2);
  });
});
