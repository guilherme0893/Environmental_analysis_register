/* eslint-disable max-lines-per-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
import app from '../../../app';
// @ts-ignore
import SampleParameters from '../../../models/sampleParameters';
import { sampleParametersMock } from '../../mocks/sampleParameters/sampleParametersMock';

chai.use(chaiHttp);

const { expect } = chai;

const sampleParameters = new SampleParameters();

describe('Tests the GET route', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(sampleParameters, 'getByName')
      .resolves({ ...sampleParametersMock });
  });

  afterEach(() => {
    (sampleParameters.getByName as sinon.SinonStub).restore();
  });
  it('it returns all samples where the parameters is present and a status 200', async () => {
    const response = await chai.request(app).get('/parameters/cromo');
    expect(response.status).to.be.equal(200);
    expect(response.body.length).to.be.greaterThanOrEqual(1);
    expect(response.body[0]).to.have.property('id');
    expect(response.body[0]).to.have.property('samplePointName');
    expect(response.body[0]).to.have.property('parameter');
    expect(response.body[0]).to.have.property('parameterUnity');
    expect(response.body[0]).to.have.property('parameterValue');
    expect(response.body[0]).to.have.property('samplingDate');
  });
});
