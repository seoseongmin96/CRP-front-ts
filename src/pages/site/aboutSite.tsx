import React, {useState} from 'react';
import { AboutSite } from '@components/site/AboutSite';
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const AboutSitePage = () => {
    return (
        <Layout title= "aboutSite us">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>관련사이트</BreadcrumbItem>
            </Breadcrumb>
        <AboutSite/>
        </div>
        </Layout>
    );
};

export default AboutSitePage