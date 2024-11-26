import { BaseModel } from '../base/base-model'

export class User extends BaseModel {
	username: string
	password?: string
	firstName?: string
	lastName?: string
	token?: string
	email?: string

	constructor(username: string) {
		super()
		this.username = username
	}
}
