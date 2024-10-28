import { StatusResponse } from "./StatusResponse";
import './App.css'
import './TitleStyling.css'

export default function ServerInfo(props: {res: StatusResponse})
{
    function ParseUptimeSeconds(seconds: number): string {
        var date = new Date(0)
        date.setUTCSeconds(seconds, 0)
        
        // i hate javascript
        date.setHours(date.getHours() + (date.getTimezoneOffset() / 60))

        return date.toLocaleString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }

    return <div className="server-name-box">
        <div>
            <h3>~{props.res.name}~</h3>
            <h4>{props.res.motd}</h4>
            <h4>Up for {ParseUptimeSeconds(props.res.uptime)}</h4>
        </div>
    </div>
}