import React, { useState } from "react";
import { Upload } from "@components/program/plagiarism/Upload";
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const UploadPage = () => {
    return (
        <Layout title= "upload">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>악보분석</BreadcrumbItem>
            </Breadcrumb>
        <Upload/>
        </div>
        </Layout>
    )
};

export default UploadPage