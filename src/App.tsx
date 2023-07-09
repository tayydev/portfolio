import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import DrawArticle from "./DrawArticle";
import LandingPage from "./LandingPage";

const ARTICLE_LOC = "/md/index.json"

function App() {
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        fetch(ARTICLE_LOC)
            .then(response => response.text())
            .then(text => setList(JSON.parse(text)))
    }, [])

    return (
        <Stack direction={'column'} sx={{backgroundColor: 'rgb(228,221,239)'}}>
            <LandingPage/>
            <Stack direction={'row'} justifyContent={'center'} sx={{
                position: 'relative',
                top: '-10.5rem'
            }}>
                <Stack direction={'column'} spacing={2}>
                    <Box  sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginX: '0.5rem'
                    }}>
                        <Typography sx={{fontSize: '2.5rem', color: 'white', textAlign: 'center'}}>
                            Check out what I've been working on
                            <img
                                src={"/squiggle2.svg"}
                                alt={'A downward facing squiggle'}
                                height={'33rem'}
                                style={{
                                    position: 'relative',
                                    bottom: '-0.5rem',
                                    marginLeft: '0.5rem',
                                }}
                            />
                        </Typography>
                    </Box>
                    <Stack direction={'column'} spacing={2} sx={{
                        backgroundColor: 'white',
                        maxWidth: '250mm',
                        padding: '1rem',
                    }}>
                        <Typography variant={'h3'} sx={{fontSize: '2.5em'}}>
                            Portfolio
                        </Typography>
                        {list.map(addr =>
                            <DrawArticle key={addr} target={addr}/>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default App;
