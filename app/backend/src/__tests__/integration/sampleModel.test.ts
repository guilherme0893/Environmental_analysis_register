import app from "../../app";
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
chai.use(chaiHttp);
import samplePoints from '../../models/samplePoints';
import { samplePointsMock } from '../mocks/samplePointsMock';

const samplePointsModel = new samplePoints();

describe('Tests the GET route', () => {

  beforeEach(async () => {
    sinon
      .stub(samplePointsModel, 'getAll')
      .resolves({ ...samplePointsMock });
  });

  afterEach(()=>{
    (samplePointsModel.getAll as sinon.SinonStub).restore();
  })
  it('it returns all samples and a status 200', async () => {
    const response = await chai.request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('x_coordinate');
    expect(response.body[0]).toHaveProperty('y_coordinate');
  });
});
