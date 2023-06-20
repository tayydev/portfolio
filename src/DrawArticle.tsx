import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {MD_OVERRIDES} from "./Theme";

interface DrawArticleProps {
    target: string
}

export default function DrawArticle(props: DrawArticleProps) {
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(props.target)
            .then(response => response.text())
            .then(text => setContent(text))
    }, [])

    return (
        <ReactMarkdown components={MD_OVERRIDES}>
            {content}
        </ReactMarkdown>
    );
}