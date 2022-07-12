import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SampleParameters from '../../../models/sampleParameters';
import { sampleParametersMock } from '../../mocks/sampleParameters/sampleParametersMock';

chai.use(chaiHttp);
const { expect } = chai;

const sampleParametersModel = new SampleParameters();

describe('Tests the GET /parameters route', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(sampleParametersModel, 'getAll')
      .resolves({ ...sampleParametersMock });
  });

  afterEach(() => {
    (sampleParametersModel.getAll as sinon.SinonStub).restore();
  });
  it('it returns all parameters and a status 200', async () => {
    const response = await chai.request(app).get('/parameters');
    expect(response.status).to.be.equal(200);
    expect(response.body[0]).to.have.property('samplePointName');
    expect(response.body[0]).to.have.property('parameter');
    expect(response.body[0]).to.have.property('parameterUnity');
    expect(response.body[0]).to.have.property('parameterValue');
  });
});
