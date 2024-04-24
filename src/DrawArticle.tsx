import React from "react";
import ReactMarkdown from "react-markdown";
import { MD_OVERRIDES } from "./Theme";
import rehypeRaw from "rehype-raw";

interface DrawArticleProps {
    content: string;
}

export default function DrawArticle(props: DrawArticleProps) {
    return (
        <ReactMarkdown components={MD_OVERRIDES} rehypePlugins={[rehypeRaw]}>
            {props.content}
        </ReactMarkdown>
    );
}
