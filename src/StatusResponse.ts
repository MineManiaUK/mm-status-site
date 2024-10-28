export interface StatusResponse {
    name: string
    motd: string
    uptime: number
    servers: ServerData[]
}

export interface ServerData {
    name: string
    players: PlayerData[]
}

export interface PlayerData {
    name: string
    uuid: string
    ping: number
    client: string
}
