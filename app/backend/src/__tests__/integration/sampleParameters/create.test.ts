/* eslint-disable max-lines-per-function */
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SampleParameters from '../../../models/sampleParameters';
import { sampleParameterMock } from '../../mocks/sampleParameters/sampleParametersMock';

chai.use(chaiHttp);
const { expect } = chai;

const sampleParametersModel = new SampleParameters();

describe('Tests the POST /parameters route', () => {
  beforeEach(async () => {
    sinon
      .stub(sampleParametersModel, 'create')
      .resolves({ ...sampleParameterMock });
  });

  afterEach(() => {
    (sampleParametersModel.create as sinon.SinonStub).restore();
    sampleParametersModel.deleteParameter(sampleParameterMock.parameter);
  });

  // beforeAll(async () => {
  //   sinon
  //     .stub(samplePointsModel, 'getAll')
  //     .resolves({ ...completeSamplePointsMock });
  //   sinon
  //     .stub(samplePointsModel, 'create')
  //     .resolves({ ...samplePointMock });
  // });

  // afterAll(() => {
  //   (samplePointsModel.create as sinon.SinonStub).restore();
  //   (samplePointsModel.getAll as sinon.SinonStub).restore();
  //   samplePointsModel.deleteSample(samplePointMock.name);
  // });

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
});
