import Layout from '@components/layout';
import React, {useState} from 'react';
import { Profile } from '@components/company/Profile';
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Footer from '@components/footer';
const ProfilePage = () => {
    return (
    <Layout title= "profile us">
    <div className="container">
    <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>개발자 소개</BreadcrumbItem>
        </Breadcrumb>
    <Profile/>
    
    </div>
    </Layout>
    
    
    );
};

export default ProfilePage