import React, { useState } from "react";
import { Result } from "@components/program/plagiarism/Result"; 
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const ResultPage = () => {
    return (
        <Layout title= "result">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>표절결과</BreadcrumbItem>
            </Breadcrumb>
        <Result/>
        </div>
        </Layout>
    )
};

export default ResultPage