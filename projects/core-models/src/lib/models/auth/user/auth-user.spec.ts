import { User } from '../../user/user'
import { AuthUser } from './auth-user'

describe('AuthUser', () => {
	it('should create an instance', () => {
		expect(new AuthUser('', new User('user'))).toBeTruthy()
	})
})
