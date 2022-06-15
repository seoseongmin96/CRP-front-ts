import React, {useState} from 'react';
import { MusicSearch } from '@components/program/music/MusicSearch'; 
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const MusicSearchPage = () => {
    return (
        <Layout title= "musicsearch">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>검색결과창</BreadcrumbItem>
            </Breadcrumb>
        <MusicSearch/>
        </div>
        </Layout>
    );
};

export default MusicSearchPage