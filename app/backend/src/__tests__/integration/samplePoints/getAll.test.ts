/* eslint-disable max-lines-per-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../app';
import SamplePoints from '../../../models/samplePoints';
import { samplePointsMock } from '../../mocks/samplePoints/samplePointsMock';

chai.use(chaiHttp);

const { expect } = chai;

const samplePointsModel = new SamplePoints();

describe('Tests the GET route', () => {
  describe('if successful', () => {
    beforeEach(() => {
      sinon
        .stub(samplePointsModel, 'getAll')
        .resolves({ ...samplePointsMock });
    });

    afterEach(() => {
      (samplePointsModel.getAll as sinon.SinonStub).restore();
    });

    it('it returns all samples and a status 200', async () => {
      const response = await chai.request(app).get('/samples');
      expect(response.status).to.be.equal(200);
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('x_coordinate');
      expect(response.body[0]).to.have.property('y_coordinate');
    });
  });

  // describe('if fails', () => {
  //   // beforeEach(() => {
  //   //   sinon
  //   //     .stub(samplePointsModel, 'getAll')
  //   //     .resolves({ ...emptySamplePointMock });
  //   // });

  //   afterEach(() => {
  //     (samplePointsModel.getAll as sinon.SinonStub).restore();
  //   });

  //   it(`if fails returns a status 404 and the message "Samples not found!
  //     Please check the server or if samples were registred!"`, async () => {
  //     sinon.stub(samplePointsModel, 'getAll').rejects();
  //     const response = await chai.request(app).get('/samples');
  //     expect(response.status).to.be.equal(404);
  //     expect(response.body).to.have.property('message');
  //   });
  // });
});
