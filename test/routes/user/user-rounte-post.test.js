import { expect } from 'chai'
import request from 'supertest'
import app from 'server'
import {
  close,
  dropCollection
} from 'db'

import { yellow } from 'logger'

after(async function() {
  await close()
})

const userBad = {
  username: 'good',
  email: 'bad.com'
}

const userGood = {
  username: 'good',
  email: 'good@good.com'
}


describe.only('user-route POST', function() {
  before(async function() {
    await dropCollection()
  })
  it('userBad', async function() {
    const post = await request(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send(userBad)
    yellow('userBad: post.body', post.body)
  })
  it('userGood', async function() {
    const post = await request(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send(userGood)
    yellow('userGood: post.body', post.body)
  })

})
