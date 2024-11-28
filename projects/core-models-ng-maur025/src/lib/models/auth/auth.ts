import { User } from '../user/user'

export class Auth {
	authorization: string
	user: User

	constructor(authorization: string, user: User) {
		this.authorization = authorization
		this.user = user
	}
}
