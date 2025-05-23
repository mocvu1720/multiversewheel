import { Schema, model } from 'mongoose'

interface IWeapon {
  name: string
  type: ItemType
  Tags: Schema.Types.ObjectId[]
}

const WeaponSchema = new Schema<IWeapon>({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['NORMAL', 'SPECIAL'],
    required: true
  },
  Tags: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag',
    required: true
  }
})

const Weapon = model<IWeapon>('Weapon', WeaponSchema)

export default Weapon
