import dotenv from 'dotenv'
dotenv.config()
import('~/dbs/init.mongodb.js')
import race from '~/models/PlayerModel/race.model.js'

const raceSample = [
  { name: 'Goblin', trait: 'None' },
  { name: 'Gnome', trait: 'None' },
  { name: 'Human', trait: 'Nhận 2 Char Dev' },
  { name: 'Dwarf', trait: 'None' },
  {
    name: 'Merfolk',
    trait: 'Khởi đầu với 1 "Water" Power. Sau mỗi trận thắng, +2 vào trọng số để xuất hiện Arena "Ocean".'
  },
  {
    name: 'Skeleton',
    trait: 'Ở trong Redemption Arc, nhận +3 Durability. Khi vào vòng Tournament, nhận 1 extra PvP Rewards.'
  },
  { name: 'Troll', trait: 'None' },
  { name: 'Reptile', trait: 'None' },
  { name: 'Orc', trait: 'Nhận +1 vào chỉ số thấp nhất khi thắng và -1 vào chỉ số cao nhất khi thua.' },
  {
    name: 'Dryad',
    trait: 'Sau mỗi 2 trận thắng, nhận 1 Nature Power. Khi vào Tournament, nhận 1 Nature Power sau mỗi trận thắng.'
  },
  { name: 'Elf', trait: 'Có Rizz Wheel' },
  { name: 'Spirit', trait: 'None' },
  { name: 'Werebeast', trait: 'Nhận power "Feast".' },
  {
    name: 'Vampire',
    trait:
      'Sau 1 combat nếu không được hút máu, nhận -2 all stats. Hút máu thông qua: Thắng kẻ thù, "Potion of Blood" hoặc "Make Love".'
  },
  { name: 'Hybrid', trait: 'None' },
  { name: 'Cyborg', trait: 'IQ và BIQ base khởi đầu là 0 và không có vòng quay cho 2 chỉ số này.' },
  {
    name: 'Giant',
    trait: 'Sau vòng quay chỉ số, so sánh Base Strength và Base IQ. Nhận -5 chỉ số thấp hơn và +5 vào chỉ số cao hơn.'
  },
  { name: 'Dragon', trait: 'None' },
  {
    name: 'Moon-touched',
    trait: '30% Nhận 2 Char Dev, 30% Nhận Archetype "Pacifist" từ đầu, 30% Nhận cả 2 cái trên, 10% không có gì'
  },
  { name: 'Angel', trait: 'Nhận Archetype "Pacifist" từ đầu (sẽ nhận thêm một Archetype nữa).' },
  { name: 'Demi-God', trait: 'Lấy quà từ phụ huynh/ họ hàng' },
  { name: 'Primordial Being', trait: 'None' },
  { name: 'Mythical Beasts', trait: 'Nhận vòng quay "Lair of the Myth"' },
  { name: 'Demon', trait: 'Nhận 1 Tsuki Blessing' },
  { name: 'God', trait: 'Nhận vòng quay Tín đồ và hiệu ứng tương ứng.' }
]

const addRaceSample = async () => {
  await race.insertMany(raceSample)
  console.log('Add race sample done')
  process.exit()
}

addRaceSample()
