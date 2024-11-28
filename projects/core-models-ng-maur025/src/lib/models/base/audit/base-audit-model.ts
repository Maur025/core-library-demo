import { BaseModel } from '../base-model'

export abstract class BaseAuditModel extends BaseModel {
	createdAt: Date = new Date()
	createdBy: string = ''
	updatedAt: Date = new Date()
	updatedBy: string = ''
	version: number = 0

	constructor() {
		super()
	}
}
