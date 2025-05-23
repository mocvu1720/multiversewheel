import { Schema, model } from 'mongoose'

interface IWeapon {
  WeaponID: Schema.Types.ObjectId
  WeaponMasteryID: Schema.Types.ObjectId
  effect: string
  description: string
}

const WeaponEffectSchema = new Schema<IWeapon>({
  WeaponID: {
    type: Schema.Types.ObjectId,
    ref: 'Weapon',
    required: true
  },
  WeaponMasteryID: {
    type: Schema.Types.ObjectId,
    ref: 'WeaponMastery',
    required: true
  },
  effect: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const WeaponEffect = model<IWeapon>('WeaponEffect', WeaponEffectSchema)

export default WeaponEffect
