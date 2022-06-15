import React, { useState } from "react";
import { Board } from "@components/community/Board";
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const BoardPage = () => {
    return (
        <Layout title= "board">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>게시판</BreadcrumbItem>
            </Breadcrumb>
        <Board/>
        </div>
        </Layout>
    )
};

export default BoardPage