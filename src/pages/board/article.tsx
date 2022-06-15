import Article from '@components/community/crudboard/BoardList';
import React from 'react'

const ArticlePage = () => {
    return(<Article article={Article} deletePost={function (id: number): void {
        throw new Error("Function not implemented.");
    } }/>)
}

export default ArticlePage