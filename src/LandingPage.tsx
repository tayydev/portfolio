import {Box, Stack, Typography} from "@mui/material";

export default function LandingPage() {
    return <Stack direction={'column'} justifyContent={'center'}
        sx={{
            minHeight: '85vh',
            backgroundColor: 'rgb(70, 30, 100)',
            color: 'white',
        }}>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{
            transform: 'skewY(-5deg)',
            backgroundColor: 'rgb(139,106,199)',
            width: '100%',
            paddingY: '5%',
            zIndex: '99'
        }}>
            <Stack direction={'column'} spacing={2} sx={{
                transform: 'skewY(5deg)',
                maxWidth: '250mm',
                padding: '1rem'
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
        </Stack>
    </Stack>
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