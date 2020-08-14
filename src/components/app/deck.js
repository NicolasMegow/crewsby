import React, { useState } from 'react'

import Slide from "./slide.js"
import FeedbackSlide from "./feedback-slide"


const Deck = ({ slides, length, skill, type }) => {
    const [currentStep, setStep] = useState(0)

    return (<>
        {slides.map((slide, i) => (
            <Slide key={i} step={i} slide={slide} currentStep={currentStep} setStep={setStep} length={length} />
        ))}
        <FeedbackSlide step={length} currentStep={currentStep} setStep={setStep} level={skill} length={length} type={type} />
    </>)

}

export default Deck