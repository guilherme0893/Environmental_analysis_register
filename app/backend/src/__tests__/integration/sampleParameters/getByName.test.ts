/* eslint-disable max-lines-per-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');
import app from '../../../app';
// @ts-ignore
import SampleParameters from '../../../models/sampleParameters';
// import { sampleParametersMock } from '../../mocks/sampleParameters/sampleParametersMock';

chai.use(chaiHttp);

const { expect } = chai;

const sampleParameters = new SampleParameters();

type sampleParametersTypes = {
  id: number;
  samplePointName?: string;
  parameter: string;
  parameterUnity: string;
  parameterValue: number;
  samplingDate: Date | string;
}

describe('Tests the GET route', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(sampleParameters, 'getByName')
      .resolves([{
        id: 1,
        samplePointName: 'ponto 1',
        parameter: 'cromo',
        parameterUnity: 'mg/l',
        parameterValue: 0.05,
        samplingDate: '2022/07/09' as unknown as Date,
      },
      {
        id: 2,
        samplePointName: 'ponto 2',
        parameter: 'cádmio',
        parameterUnity: 'mg/l',
        parameterValue: 0.5,
        samplingDate: '2022/07/10' as unknown as Date,
      }] as sampleParametersTypes[]);
  });

  afterEach(() => {
    (sampleParameters.getByName as sinon.SinonStub).restore();
  });
  it('it returns all samples where the parameters is present and a status 200', async () => {
    const response = await chai.request(app)
      .get('/parameters/cromo');
    expect(response.body[0].parameter).to.be.equal('cromo');
    expect(response.status).to.be.equal(200);
    expect(response.body.length).to.be.greaterThanOrEqual(1);
    expect(response.body[0]).to.have.property('samplePointName');
    expect(response.body[0]).to.have.property('parameter');
    expect(response.body[0]).to.have.property('parameterUnity');
    expect(response.body[0]).to.have.property('parameterValue');
    expect(response.body[0]).to.have.property('samplingDate');
  });

  it(`returns the message "Parameter not found! Please check the spell or
  register the parameter and its associated sample", if the parameter is not found
  and the status 404`, async () => {
    const response = await chai.request(app).get('/parameters/teste');
    expect(response.status).to.be.equal(404);
    expect(response.body).to.have.property('message');
  });
});
