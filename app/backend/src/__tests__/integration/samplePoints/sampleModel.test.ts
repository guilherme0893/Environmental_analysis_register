/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SamplePoints from '../../../models/samplePoints';
import { samplePointsMock } from '../../mocks/samplePointsMock';

chai.use(chaiHttp);

const samplePointsModel = new SamplePoints();

describe('Tests the GET route', () => {
  jest.setTimeout(10000);

  beforeEach(async () => {
    sinon
      .stub(samplePointsModel, 'getAll')
      .resolves({ ...samplePointsMock });
  });

  afterEach(() => {
    (samplePointsModel.getAll as sinon.SinonStub).restore();
  });
  it('it returns all samples and a status 200', async () => {
    const response = await chai.request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('x_coordinate');
    expect(response.body[0]).toHaveProperty('y_coordinate');
  });
});
