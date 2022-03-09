import SourceTraceManageHomePage from "../pages/SourceTraceManageHomePage/Index.vue";
// import * as HeaderStories from "./Header.stories";

import p1 from "@/assets/images/Home/advantage1_szhfwcz.png";
import p2 from "@/assets/images/Home/advantage2_qzqsjjk.png";
import p3 from "@/assets/images/Home/advantage3_djdsycz.png";
import p4 from "@/assets/images/Home/advantage4_zdyslmb.png";
import p5 from "@/assets/images/Home/advantage5_dcbgxlz.png";
import p6 from "@/assets/images/Home/advantage6_ganfhtx.png";
import loginlogo from "@/assets/images/Home/home_logo.png";
import bannerPhoneImage from "@/assets/images/Home/banner-phone.png";
import advantage1 from "@/assets/images/Home/advantage1.png";
import advantage2 from "@/assets/images/Home/advantage2.png";
import advantage3 from "@/assets/images/Home/advantage3.png";
import home3_baner3 from "@/assets/images/Home/home3_baner3.png";
import home3_baner1 from "@/assets/images/Home/home3_baner1.png";
import home3_baner2 from "@/assets/images/Home/home3_baner2.png";

const advantagesCardList = [
  {
    title: "领先级技术研发",
    desc: "已累计申请近 200项区块链发明专利，与阿里、腾讯同列全球专利数排名前10。",
    icon: advantage1,
  },
  {
    title: "专业化团队运营",
    desc: "作为专业的区块链解决方案服务商，引入不同国家的技术专家、电商创业者等行业精英。",
    icon: advantage2,
  },
  {
    title: "500强合作伙伴",
    desc: "已为海航海平线、美的金融、电力巨头等多家世界 500强企业正式上线区块链项目。",
    icon: advantage3,
  },
];
const featuresContent = [
  { text: `产品资料隐私性` },
  { text: `团队权限管理` },
  { text: `定期维护更新` },
  { text: `专业技术支持` },
  { text: `全程自定义` },
  { text: `全程协同合作` },
];

// 我们的优势
const ourAdvantages = [
  {
    src: p1,
    icon: `&#xe61e;`,
    title: `数字化防伪存证`,
    text: `区块链共识算法、非对称加密、分布式存储等技术特性，存证安全加密，溯源真实。`,
  },
  {
    src: p2,
    icon: `&#xe632;`,
    title: `全周期数据监控`,
    text: `上链数据无法作弊、不可篡改，从源头控制数据，实现存证全生命周期监控。`,
  },
  {
    src: p3,
    icon: `&#xe61b;`,
    title: `多节点溯源见证`,
    text: `高质量溯源系统稳定可靠，存证关键控制点提供警告、预防、管控提示，数据可控。`,
  },
  {
    src: p4,
    icon: `&#xe61c;`,
    title: `自定义上链模板`,
    text: `个性化模板自由定制，类目产品任意添加，数字化一体存证，操作更灵活。`,
  },
  {
    src: p5,
    icon: `&#xe617;`,
    title: `低成本高效流转`,
    text: `上链即生成专属二维码，有效提高协调效率，线上线下易流转，降低传播成本。`,
  },
  {
    src: p6,
    icon: `&#xe61a;`,
    title: `高安全防护体系`,
    text: `多维度、多层防护确保系统技术安全，保障产品及服务的无系统性风险运作。`,
  },
];

// 企业独立部署
const deploys = [
  {
    title: `增量更新`,
    text: `信息上链后可持续录入，多次上链，上传更便捷。`,
    image: home3_baner3,
  },
  {
    title: `用户管理`,
    text: `管理员统一设用户权限，专人专责，管理更规范。`,
    image: home3_baner1,
  },
  {
    title: `权限交接`,
    text: `现有工作信息一键移交，尽在掌握，操作更简单。`,
    image: home3_baner2,
  },
];

// 使用行业
const industrys = [
  {
    color: `#15CBBA`,
    icon: `&#xe62f;`,
    title: `商品上链`,
    text: `对商品实现从源头的信息采集记录，原料来源追溯、⽣产过程、加⼯环节、仓储信息、检验批次、物流周转、到第三⽅质检、海关出⼊境、防伪鉴证的全程可追溯。`,
  },
  {
    color: `#6587FD`,
    icon: `&#xe62e;`,
    title: `证书上链`,
    text: `各种教育资质证书均可上链，将个人学习、培训记录和证书存放在区块链数据库中，使得证书验证更加安全、有效，保证学习记录和证书的真实性并永久保存。`,
  },
  {
    color: `#FFA475`,
    icon: `&#xe645;`,
    title: `文章上链`,
    text: `上链后文章将永久被记录在区块链上，不可篡改且不可删除，区块链文章为原创文章作者应有的版权保驾护航，让维权更简单。`,
  },
  {
    color: `#FF7575`,
    icon: `&#xe631;`,
    title: `古董字画存证`,
    text: `上链后赋予每一件艺术品独一无二的身份信息，即便在交易流转过程中也可进行信息追加，让赝品、仿品无可乘之机，有效保障艺术品交易双方利益。`,
  },
];

export default {
  title: "Pages/SourceTraceManageHomePage",
  component: SourceTraceManageHomePage,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SourceTraceManageHomePage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { ...args };
  },
  // Then, those values can be accessed directly in the template
  template: `<source-trace-manage-home-page 
                :sectionTitle="sectionTitle" 
                :projPartyLogo="projPartyLogo"
                :bannerPhoneImage="bannerPhoneImage"
                :sectionTitle="sectionTitle"
                :sectionDesc="sectionDesc"
                :advantagesCardList="advantagesCardList"
                :featuresContent="featuresContent"
                :iconfontLink="iconfontLink"
                :ourAdvantages="ourAdvantages"
                :deploys="deploys"
                :industrys="industrys"
              />`,
});

export const Example1 = Template.bind({});
Example1.args = {
  projPartyLogo: loginlogo,
  bannerPhoneImage: bannerPhoneImage,
  sectionTitle: "33复杂美",
  sectionDesc: "核心技术CHAIN33区块链底层开源，构建数字一体化生态体系",
  advantagesCardList: advantagesCardList,
  featuresContent: featuresContent,
  iconfontLink: "//at.alicdn.com/t/font_1321935_cdom05madx.css",
  ourAdvantages: ourAdvantages,
  deploys: deploys,
  industrys: industrys,
};
