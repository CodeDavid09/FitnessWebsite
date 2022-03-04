import React, {useState} from 'react';
import Icon1 from '../../images/Icon1.jpg';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                <ImgBg src={Icon1} />
            </HeroBg>
            <HeroContent>
                <HeroH1>A BIG OFFER FOR THIS SUMMER</HeroH1>
                <HeroP>
                    Sign up and start your fitness journey TODAY
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Sign Up{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero