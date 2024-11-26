import { UUID } from '../../types/uuid.type'

export abstract class BaseModel {
	id?: UUID
	deleted?: boolean
}
