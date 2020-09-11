import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProgressBar = ({ step, length }) => {

    return (
        <div style={{ height: "2rem" }}>
            {[...Array(length + 1)].map((circle, i) => {
                return (<React.Fragment key={i}>
                    <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        fixedWidth
                        color={i === step ? "#4285F4" : (i < step ? "#78A9f7" : "#DAE4F2")} />
                </React.Fragment >)
            })}
        </div>)
};

export default ProgressBar