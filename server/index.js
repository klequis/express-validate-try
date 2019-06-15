import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import users from 'routes/user-route'
import { red } from 'logger'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/users', users)

app.get('*', (req, res) => {
  red('Unknown endpoint!')
  res.status(404).send('Unknown endpoint')
})

if (!module.parent) {
  app.listen(3030, () => {
    console.log(`Events API is listening on port 3030`)
  })
}

export default app
