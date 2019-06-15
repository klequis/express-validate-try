import { expect } from 'chai'
import request from 'supertest'
import app from 'server'

import { yellow } from 'logger'

const userJoe = {
  username: 'joe',
  email: 'joejoe.com'
}

describe.only('user-route POST', function() {
  describe('test POST /api/users', function() {
    it('should post 1 user', async function() {
      const post = await request(app)
        .post('/api/users')
        .set('Accept', 'application/json')
        .send(userJoe)
      yellow('post.body', post.body)
    })
  })

})
