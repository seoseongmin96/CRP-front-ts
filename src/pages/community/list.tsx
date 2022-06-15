import React, { useState } from "react";
import { List } from "@components/community/List"; 
import Layout from '@components/layout';
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
const ListPage = () => {
    return (
        <Layout title= "list">
        <div className="container">
        <Breadcrumb>
              <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>게시판 목록</BreadcrumbItem>
            </Breadcrumb>
        <List/>
        
        </div>
        </Layout>
    )
};

export default ListPage