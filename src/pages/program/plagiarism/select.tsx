import React, { useState } from "react";
import { Select } from "@components/program/plagiarism/Select";
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const SelectPage = () => {
    return (
        <Layout title= "select">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>관련사이트</BreadcrumbItem>
            </Breadcrumb>
        <Select/>
        </div>
        </Layout>
    )
};

export default SelectPage