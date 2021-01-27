import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Adminn Userr',
    email: 'babuece97@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shimu',
    email: 'shimu_29@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users