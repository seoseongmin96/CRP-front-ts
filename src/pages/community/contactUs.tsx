import React, { useState } from "react";
import { ContactUs } from "@components/community/ContactUs";
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const ContactUsPage = () => {
    return (
        <Layout title= "contact us">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>문의하기</BreadcrumbItem>
            </Breadcrumb>
        <ContactUs/>
        </div>
        </Layout>
    )
};

export default ContactUsPage