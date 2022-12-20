const bcrypt = require('bcryptjs')

const encrypt = async (address) =>{
    const hash = await bcrypt.hash(address, 10)
    return hash
}
const compare = async (addressPlain, addressPassword) =>{
    return await bcrypt.compare(addressPlain, addressPassword)
}
module.exports = {encrypt, compare}