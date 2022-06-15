import React, {useState} from "react"
import { UpdateList } from "@components/community/UpdateList"; 
import Layout from '@components/layout';
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
const UpdateListPage = () => {
    return(
        <Layout title= "updatelist">
        <div className="container">
        <Breadcrumb>
              <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>게시판 목록</BreadcrumbItem>
            </Breadcrumb>
        <UpdateList/>
        
        </div>
        </Layout>
    )
};
export default UpdateListPage

