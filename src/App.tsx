import React from 'react';
import {Stack, Typography} from "@mui/material";
import DrawArticle from "./DrawArticle";

const ARTICLE_COUNT = 3

function App() {
    let indices: number[] = []
    for(let i = 1; i <= ARTICLE_COUNT; i++) {
        indices.push(i)
    }

    return (
        <Stack direction={'row'} justifyContent={'center'}>
            <Stack direction={"column"} spacing={5} sx={{
                maxWidth: '250mm',
                margin: '1rem'
            }}>
                <Typography variant={'h1'}>
                    /portfolio
                </Typography>
                {indices.map(index =>
                    <DrawArticle key={index} target={'/md/' + index + '.md'}/>
                )}
            </Stack>
        </Stack>
    )
}

export default App;
