import { expect } from "chai";
import 'jest';
import request from 'supertest';
import app from "../../app";

describe('Tests the GET route', () => {
  it('it returns all samples and a status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).to.be.equal(200);
    expect(response.body[0]).to.have.property('id');
    expect(response.body[0]).to.have.property('name');
    expect(response.body[0]).to.have.property('x_coordinate');
    expect(response.body[0]).to.have.property('y_coordinate');
  });
});
