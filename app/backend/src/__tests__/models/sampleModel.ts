import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../../app';
import samplePointsMock from '../mocks/samplePointsMock';
import { Response } from 'superagent';
// import SamplePoint from models

chai.use(chaiHTTP);

describe('tests the route GET /', () => {
  let chaiHttpResponse: Response;
  before(async() => {
    sinon
      .stub(SamplePoint, 'getAll')
      .resolves({...samplePointsMock} as SamplePoint);
  });
  after(() => {
    (SamplePoint.getAll as sinon.SinonStub).restore();
  });
  it('if successful, returns all samplePoints and status 200', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/');
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(samplePointsMock)
  });
});
