import React, {ReactNode} from 'react';
import App from '../App';
import Themed from "../Theme";
import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";

interface IndexProps {
    articles: string[]
}

export default function Index(props: IndexProps) {
    return (
        <React.StrictMode>
            <Themed>
                <App articles={props.articles}/>
            </Themed>
        </React.StrictMode>
    )
}

//if this arcane magic doesn't work blame carson: (https://github.com/Mee42/carson.sh/blob/master/src/pages/blog.tsx)
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            articles: await getArticles(fs),
        }
    }
}

export async function getArticles(fs: any): Promise<string[]> {
    const dir = path.join(process.cwd(), 'public/md')
    const posts = fs.readdirSync(dir)
    return posts.map((filename: string) => {
        const filepath = path.join(dir, filename)
        return fs.readFileSync(filepath, 'utf8')
    })
}