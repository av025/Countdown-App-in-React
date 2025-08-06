import "../styles/display.css"; 

export default function Display({days, hours, minutes, seconds}) {
    return <div className="display"> 
    <ul>
        <li>
            <span id="days">{days()}</span>
            Days
        </li>
        <li>
            <span id="hours">{hours()}</span>
            Hours
        </li>
        <li>
            <span id="minutes">{minutes()}</span>
            Minutes
        </li>
        <li>
            <span id="seconds">{seconds()}</span>
            Seconds
        </li>
    </ul>
    </div>
}