import { model, Schema } from 'mongoose'

interface IWeaponMastery {
  level: number
  name: string
}

const WeaponMasterySchema = new Schema<IWeaponMastery>({
  level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const WeaponMastery = model<IWeaponMastery>('WeaponMastery', WeaponMasterySchema)

export default WeaponMastery
