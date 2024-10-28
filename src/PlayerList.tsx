import { PlayerData, ServerData } from "./StatusResponse";
import './TableStyle.css'

export default function PlayerList(props: {server: ServerData}) {
    return <div className="playertab-container">
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>
                        {props.server.name} ({props.server.players.length} online)
                    </th>
                </tr>
                {props.server.players.length > 0 ?
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Ping</th>
                        <th scope="col">Client</th>
                    </tr>
                : <></>}
            </thead>
            <tbody>
                {props.server.players.map((player, i) =>
                    <PlayerRow key={i} player={player} />
                )}
            </tbody>
        </table>
    </div>
}

function PlayerRow(props: {player: PlayerData}) {
    return <>
        <tr>
            <td>{props.player.name}</td>
            <td>{props.player.ping}</td>
            <td>{props.player.client}</td>
        </tr>
    </>
}