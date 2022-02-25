const bcrypt = require('bcryptjs')

module.exports = {
    hashPassword: async(plaintext, SALT_ROUNDS = 10) => {
        try {
            const hash = bcrypt.hash(plaintext, SALT_ROUNDS)
            return hash
        } catch (error) {
            throw('Error hashing password...', error)
        }
    }
}