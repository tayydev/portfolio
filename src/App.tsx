import React, {useEffect, useState} from 'react';
import {Stack} from "@mui/material";
import DrawArticle from "./DrawArticle";

const ARTICLE_LOC = "/md/index.json"

function App() {
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        fetch(ARTICLE_LOC)
            .then(response => response.text())
            .then(text => setList(JSON.parse(text)))
    }, [])

    console.log('list', list)

    return (
        <Stack direction={'row'} justifyContent={'center'}>
            <Stack direction={"column"} spacing={2} sx={{
                maxWidth: '250mm',
                margin: '1rem'
            }}>
                {list.map(addr =>
                    <DrawArticle key={addr} target={addr}/>
                )}
            </Stack>
        </Stack>
    )
}

export default App;
