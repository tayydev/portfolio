import {Box, Stack, Typography} from "@mui/material";

export default function LandingPage() {
    return <Box
        sx={{
            height: 'min(100vh, 200vw)',
            backgroundColor: 'rgb(70, 30, 100)',
            color: 'white',
        }}>
        <Stack direction={'column'} spacing={2} sx={{
            marginTop: 'min(30vh, 30vw)',
            marginBottom: 'auto',
            marginLeft: '5rem'
            // position: 'absolute',
            // left: '25%',
            // top: '25%'
        }}>
            <Typography variant={'h1'}>
                Hey, my name is Ethan
            </Typography>
            <Typography variant={'body1'}>
                I'm a motivated software engineer studying at the College of William & Mary
            </Typography>
            <Stack direction={'row'} spacing={2} justifyItems={'center'}>
                <Icon src={'/icons/github-mark-white.svg'} href={'https://github.com/tayydev'}/>
                <Icon src={'/icons/linkedin.svg'} href={'https://linkedin.com/in/southethan1'}/>
            </Stack>
        </Stack>
    </Box>
}

interface IconProps {
    src: string
    href?: string
    alt?: string
}

function Icon(props: IconProps) {
    return <a href={props.href}>
        <img src={props.src} alt={props.alt} height={'50rem'}/>
    </a>
}