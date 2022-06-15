import React, { useState } from "react";
import { Faq } from "@components/community/Faq";
import Layout from '@components/layout';
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';

const FaqPage = () => {
    return (
        <Layout title= "faq">
        <div className="container">
        <Breadcrumb>
              <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>FAQ</BreadcrumbItem>
            </Breadcrumb>
        <Faq/>
        </div>
        </Layout>
    
    )
};

export default FaqPage