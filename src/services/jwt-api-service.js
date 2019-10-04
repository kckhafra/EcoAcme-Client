import config from '../config'
const jwt = require('jsonwebtoken')

const JwtService = {
    verifyJwt(token) {
        return jwt.verify(token, config.JWT_SECRET, {
          algorithms: ['HS256'],
        })
      },
}

export default JwtService