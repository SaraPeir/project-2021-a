import React, {useState} from "react"
import CurrentTime from './components/CurrentTime'
import Countdown from './asyncComponents/Countdown'

const App = (props) => {
    const [isCountdownDisplayed, setCountdownDisplayed] = useState(false);

    const countdown = () => {
        if(isCountdownDisplayed) {
            return <Countdown />
        }
        return;
    }

    const toggleCountdown = () => setCountdownDisplayed(!isCountdownDisplayed)
    const arrayFromFetch = props.arrayFromFetch;
    const showInConsole = (arrayFromFetch) => console.log(arrayFromFetch);

    return(
        <React.Fragment>
            <button onClick={toggleCountdown}>See how miss to 2022</button>
            <CurrentTime />
            {countdown()}
            {showInConsole(arrayFromFetch)}
        </React.Fragment>
    )
}

export default App;
