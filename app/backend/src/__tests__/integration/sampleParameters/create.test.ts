import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SampleParameters from '../../../models/sampleParameters';
import { sampleParameterMock } from '../../mocks/sampleParameters/sampleParametersMock';
import connection from '../../../models/connection';
// import recreateDatabase from '../../../models/recreateDB';

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
    connection.end();
  });

  it('it creates a new sample and returns a status 201', async () => {
    const response = await chai.request(app).post('/parameters').send(sampleParameterMock);
    expect(response.status).to.be.equal(201);
  });
});
