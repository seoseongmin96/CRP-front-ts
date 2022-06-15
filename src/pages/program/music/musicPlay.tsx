import React, {useState} from 'react';
import { MusicPlay } from '@components/program/music/MusicPlay';
import Breadcrumb, {BreadcrumbItem} from '@components/other/breadcrumb';
import Layout from '@components/layout';
const MusicPlayPage = () => {
    return (
        <Layout title= "musicplay">
        <div className="container">
        <Breadcrumb>
        <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                홈
              </BreadcrumbItem>
              <BreadcrumbItem>음원검색창</BreadcrumbItem>
            </Breadcrumb>
        <MusicPlay/>
        </div>
        </Layout>
    );
};

export default MusicPlayPage