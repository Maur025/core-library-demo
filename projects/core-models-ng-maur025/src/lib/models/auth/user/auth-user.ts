import { User } from '../../user/user'
import { BaseModel } from '../../base/base-model'

export class AuthUser extends BaseModel {
	authorization: string
	user: User

	constructor(authorization: string, user: User) {
		super()
		this.authorization = authorization
		this.user = user
	}
}
