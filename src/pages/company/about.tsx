import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Socials from '@components/other/socials';
import Instagram from '@components/sections/instagram';
import SubcribeBar from '@components/subcribe-bar';
import React from 'react';

const About = () => {
  const handleSubmit = (val: { email: string }) => {
    console.log(val);
  };

  return (
    <Layout title="About us">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>사이트 소개</BreadcrumbItem>
        </Breadcrumb>
        <div className="about-us">
          <div className="row align-items-center">
            <div className="col-12 col-sm-8 col-md-6 mx-auto">
              <div className="about-us__image">
                <img src="https://www.crp-group.com/wp-content/uploads/2017/09/logo-crp.jpg" alt="About us image" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-us__content">
                <h3>CRP 사이트를 소개합니다.</h3>
                <p>
                  저희 회사명은 CRP 입니다. CRP에서 C는 Create, R은 Road, P는 Programs 라는 뜻으로 새로운 방향의 프로그램을 창조한다라는 의미를 가지고 있습니다. 
                  현재 저희 사이트는 국내 최고의 표절 및 악보 분석 프로그램을 가진 회사로 자리잡고 있습니다.
                </p>
                <p>
                  또한 보이스 봇 기술을 기반으로 만들어진 사이트이기 때문에 표절 및 악보 분석 프로그램에서는 사용자가 원하는 정보를 알려줌으로써 소통할 수 있고, 다른 프로그램에서도
                  보이스 봇을 이용할 수 있다는 점에서 편리함과 CRP만의 특성을 볼 수 있습니다.     
                </p>
                <div className="follow">
                  <p>팔로우:</p>
                  <Socials
                    spacing={10}
                    height={50}
                    width={50}
                    variant="contained"
                    size="small"
                    shape="circle"
                    color="light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubcribeBar onSubmit={handleSubmit} />
      </div>
      
    </Layout>
  );
};

export default About;
