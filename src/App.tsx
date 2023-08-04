import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import DrawArticle from "./DrawArticle";
import LandingPage from "./LandingPage";

interface AppProps {
    articles: string[]
}

function App(props: AppProps) {
    return (
        <Stack direction={'column'} sx={{backgroundColor: 'rgb(228,221,239)'}}>
            <LandingPage/>
            <Box sx={{
                minHeight: '15vh',
                backgroundColor: 'rgb(70, 30, 100)',
                position: 'relative',
                // top: '-5px' //this just helps with one pixel lines
            }}/>
            <Stack direction={'row'} justifyContent={'center'} sx={{
                position: 'relative',
                top: '-10.5rem',
                zIndex: 100
            }}>
                <Stack direction={'column'} spacing={2}>
                    <Box  sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginX: '0.5rem'
                    }}>
                        <Typography sx={{
                            fontSize: 'min(2.5rem, 7wv)',
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            Check out what I've been working on
                            <img
                                src={"/icons/squiggle2.svg"}
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
                        <Typography variant={'h3'} sx={{fontSize: 'min(2.5em, 12vw)'}}>
                            Portfolio
                        </Typography>
                        {props.articles.map((article, index) =>
                            <DrawArticle key={index} content={article}/>
                        )}
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'column'} sx={{backgroundColor: 'rgb(228,221,239)'}}>
                <Typography variant={'h5'} textAlign={'center'} sx={{paddingBottom: '1rem'}}>
                    Copyright © 2023 Ethan South
                </Typography>
            </Stack>
        </Stack>
    )
}

export default App;
