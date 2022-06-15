export interface NavigationItem {
  title: string;
  link: string;
  active?: string[];
  subMenu?: { title: string; link: string }[];
}

const data: NavigationItem[] = [
  {
    title: '회사소개',
    link: '',
    active: ['/compnay/'],
    subMenu: [
      { title: '개발자 소개', link: '/company/profile' },
      { title: '사이트 소개', link: '/company/about' },
     // { title: 'Homepage 3', link: '/homepages/homepage3' },
     // { title: 'Homepage 4', link: '/homepages/homepage4' },
     // { title: 'Homepage 5', link: '/homepages/homepage5' },
      // { title: 'Homepage 6', link: '/homepages/homepage6' },
     // { title: 'Homepage 6', link: '/homepages/homepage7' },
     // { title: 'Homepage 7', link: '/homepages/homepage8' },
     // { title: 'Homepage 8', link: '/homepages/homepage9' },
    ],
  },

  {
    title: '커뮤니티',
    link: '',
    active: ['/community/'],
    subMenu: [
      { title: '문의하기', link: '/community/faq' },
      { title: '자유게시판', link: '/community/list' },
     // { title: 'Post standard', link: '/post/post-standard' },
     // { title: 'Post standard cover fullwidth', link: '/post/post-cover-fullwidth' },
     // { title: 'Post standard sidebar', link: '/post/post-standard-sidebar' },
     // { title: 'Post slider sidebar', link: '/post/post-slider-sidebar' },
     // { title: 'Post video sidebar', link: '/post/post-video-sidebar' },
     // { title: 'Post audio sidebar', link: '/post/post-audio-sidebar' },
    ],
  },

  {
    title: '프로그램',
    link: '',
    active: ['/program/'],
    subMenu: [
      { title: '표절검사', link: '/program/plagiarism/upload' },
      { title: '악보분석', link: '/program/analysis/upload' },
      { title: '음원검색', link: '/program/music/musicPlay' },
      { title: '작곡', link: '/others/contact' },
    //  { title: 'Shop', link: '/others/shop' },
    //  { title: 'Product detail', link: '/others/product-detail' },
    //  { title: 'Cart', link: '/others/cart' },
    // { title: 'Checkout', link: '/others/checkout' },
      { title: 'Error 404', link: '/404' },
    ],
  },

  { title: '가이드', link: '/others/about', active: [] },
  { title: '관련사이트', link: '/site/aboutSite', active: [] },
];

export default data;
