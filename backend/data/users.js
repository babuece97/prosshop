import bcrypt from 'bcryptjs'

const users = [

    { 
        name  : 'Adminn Userr',
        email:'babuece97@yahoo.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin :true
    
    },
    { 
        name  : 'babu',
        password: bcrypt.hashSync('123456',10),
        password: 'xxxx',
    
    },
    { 
        name  : 'shimu',
        password: bcrypt.hashSync('123456',10),
        password: xxxx,
    
    },
]

export default users