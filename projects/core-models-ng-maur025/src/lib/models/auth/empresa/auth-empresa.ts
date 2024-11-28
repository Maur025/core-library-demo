import { BaseModel } from '../../base/base-model'

export class AuthEmpresa extends BaseModel {
	nombre: string

	constructor(nombre: string) {
		super()
		this.nombre = nombre
	}
}
