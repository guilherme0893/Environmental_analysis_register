/* eslint-disable max-lines-per-function */
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SampleParameters from '../../../models/sampleParameters';
import {
  sampleParameterMock,
  sampleParametersMock } from '../../mocks/sampleParameters/sampleParametersMock';

chai.use(chaiHttp);
const { expect } = chai;

const sampleParametersModel = new SampleParameters();

describe('Tests the POST /parameters route', () => {
  beforeAll(async () => {
    sinon
      .stub(sampleParametersModel, 'getByName')
      .resolves({ ...sampleParametersMock });
    sinon
      .stub(sampleParametersModel, 'create')
      .resolves({ ...sampleParameterMock });
  });

  afterAll(() => {
    (sampleParametersModel.create as sinon.SinonStub).restore();
    sampleParametersModel.deleteParameter(sampleParameterMock.parameter);
  });

  it('it creates a new parameter and returns a status 201', async () => {
    const response = await chai.request(app).post('/parameters').send(sampleParameterMock);
    expect(response.body.samplePointName).to.be.equal('ponto 1');
    expect(response.body.parameter).to.be.equal('teste');
    expect(response.body).to.have.property('samplePointName');
    expect(response.body).to.have.property('parameter');
    expect(response.body).to.have.property('parameterUnity');
    expect(response.body).to.have.property('parameterValue');
    expect(response.body).to.have.property('samplingDate');
    expect(response.status).to.be.equal(201);
  });

  it(`returns status 404 and the message
    "This sample has not been registed yet! Register it first before continue"`, async () => {
    const response = await chai.request(app).get('/parameters/nada');
    expect(response.status).to.be.equal(404);
    expect(response.body).to.have.property('message');
  });
});
