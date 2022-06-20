import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import GUButton from '@components/control/gu-button';
import HeaderTitleLine from '@components/other/header-title-line';
import Socials from '@components/other/socials';
import PostTiny from '@components/post/post-tiny';
import { AppState } from '@store';
import { handleFooterPosts } from '@store/thunk/post';
import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

interface FooterColProps {
  title: string;
  children: ReactNode;
  colClassName?: string;
  className?: string;
}

const StyledButton = styled(GUButton)`
  margin-bottom: ${15 / 16}em;
  margin-right: ${15 / 16}em;
`;

const FooterCol = ({ title, children, className, colClassName }: FooterColProps) => (
  <div className={colClassName || 'col-12 col-md-6 col-lg-4'}>
    <div className={classNames('footer-col', className)}>
      <HeaderTitleLine title={title} />
      {children}
    </div>
  </div>
);

interface FooterProps {
  theme?: ThemeVariation;
}

const Footer = ({ theme }: FooterProps) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.posts.footerList);

  useEffect(() => {
    dispatch(handleFooterPosts({ _limit: 3, type_like: 'image' }));
  }, []);

  return (
    <footer className={classNames(renderThemeClass(theme))}>
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <FooterCol title="문의하기" className="-about">
              <p>
              궁금한 사항은 문의를 주시면 친절하고 신속하게 답변 드리겠습니다.
              </p>
              <div className="contact-method">
                <p>
                  <i className="fas fa-map-marker-alt"></i>서울특별시 강남구 819 3 삼오빌딩 8층 803호
                </p>
                <p>
                  <i className="far fa-mobile-android"></i>125-711-811 | + 01 234 567 89
                </p>
                <p>
                  <i className="fas fa-headphones-alt"></i>crp.kr
                </p>
              </div>
            </FooterCol>
            <FooterCol title="찾아오시는 길">
              
              {data?.map((item, index) => (
                <PostTiny theme={theme} key={index} data={item} />
              ))}
              <img src="https://ifh.cc/g/X2023K.jpg" style={{width:300+"px", height:300+ "px"}}></img>
            </FooterCol>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="row">
                <FooterCol className="-util" colClassName="col-12 col-md-6 col-lg-12" title="키워드">
                  <div className="tags-group">
                    {[' #악보표절', '#악보분석', '#보이스봇', '#악보', '#음원'].map((item, index) => (
                      <StyledButton href="#" key={index} weight="light" size="small" variant="contained" color="light">
                        {item}
                      </StyledButton>
                    ))}
                  </div>
                </FooterCol>
                <FooterCol colClassName="col-12 col-md-6 col-lg-12" title="팔로우">
                  <Socials
                    spacing={10}
                    height={50}
                    width={50}
                    variant="contained"
                    size="small"
                    shape="circle"
                    color="light"
                  />
                </FooterCol>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2022, CRP - A Music Program Development Company All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
