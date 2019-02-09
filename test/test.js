const user = require('../api/users');
//const todo = require('../api/todos');
const chai = require('chai');
//const should = chai.should();
const chaiHttp = require('chai-http');
const models = require('../models');

chai.use(chaiHttp);

const email = 'prueba@prueba.com';
const password = '12345';

before(async () => {
  await models.User.create({
    email,
    password
  })
});
after(async () => {
  await models.User.destroy({
    where: {
      email
    }
  })
});


//test 1

describe('/auth', () => {
  it('response a success and true after login with an email and password', (done) => {
    let userLog = {
      email,
      password
    }
    chai.request(user)
      .post('/users/auth')
      .send(userLog)
      .end((res) => {
        res.should.have.status(200);
        res.body.should.be.a('object')
        res.body.success.should.equal(true);
        done();
      });
      
  })
})