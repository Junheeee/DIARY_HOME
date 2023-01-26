import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import BlogMainFeaturedPost from "./BlogMainFeaturedPost";
import BlogFeaturedPost from "./BlogFeaturedPost";
import BlogSidebar from "./BlogSidebar";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  return (
    <main>
      <BlogMainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <BlogFeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <div style={{ padding: "40px 0px 0px 40px", maxWidth: "794px" }}>
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위에 저 소나무
          철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산
          대한사람 대한으로 길이 보전하세. 가을하늘 공활한데 높고 구름없이 밝은
          달은 우리 가슴 일편 단심일세 무궁화 삼천리 화려강산 대한사람 대한으로
          길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나
          나라 사랑하세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위에 저 소나무
          철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산
          대한사람 대한으로 길이 보전하세. 가을하늘 공활한데 높고 구름없이 밝은
          달은 우리 가슴 일편 단심일세 무궁화 삼천리 화려강산 대한사람 대한으로
          길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나
          나라 사랑하세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위에 저 소나무
          철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산
          대한사람 대한으로 길이 보전하세. 가을하늘 공활한데 높고 구름없이 밝은
          달은 우리 가슴 일편 단심일세 무궁화 삼천리 화려강산 대한사람 대한으로
          길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나
          나라 사랑하세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위에 저 소나무
          철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산
          대한사람 대한으로 길이 보전하세. 가을하늘 공활한데 높고 구름없이 밝은
          달은 우리 가슴 일편 단심일세 무궁화 삼천리 화려강산 대한사람 대한으로
          길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나
          나라 사랑하세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
          동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화
          삼천리 화려강산 대한사람 대한으로 길이 보전하세. 남산위에 저 소나무
          철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산
          대한사람 대한으로 길이 보전하세. 가을하늘 공활한데 높고 구름없이 밝은
          달은 우리 가슴 일편 단심일세 무궁화 삼천리 화려강산 대한사람 대한으로
          길이 보전하세. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나
          나라 사랑하세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
        </div>
        <BlogSidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </main>
  );
}
