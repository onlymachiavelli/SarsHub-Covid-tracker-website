import { networkInterfaces } from 'os'

const getIp = () => {
    const _ = Object.values(networkInterfaces())
    console.log(
        networkInterfaces({ all: true })
    )

    return _.reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family === 'IPv4' && !i.internal && i.address || []), [])), [])
}
export default getIp