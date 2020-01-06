import Meta from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
import { useRouter } from "next/router";
import PostsRenderer from "../components/posts-renderer";
import ModeSwitch from "../components/mode-switch";

export default () => {
  const router = useRouter();
  const page = router.query.page ? Number(router.query.page) : 1;

  return (
    <div>
      <Meta>
        <title key="title">blog - HelloRusk Official Website</title>
        <meta property="og:title" content="HelloRusk Blog" />
        <meta property="og:url" content="/blog" />
        <meta property="og:description" content="HelloRuskの生活の記録" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://hellorusk.net/mika_square.png"
        />
        <meta
          name="twitter:image"
          content="https://hellorusk.net/mika_square.png"
        />
      </Meta>
      <ModeSwitch />
      <PostsRenderer page={page} />
      <br />
      <div className="jump">
        <a href="/">HOME</a>
      </div>
      <Footer />
      <style jsx>{`
        .blog {
          text-align: left;
          display: inline-block;
        }
      `}</style>
      <style jsx global>{`
        .blog {
          animation: fadein 0.2s linear;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .date {
          font-size: 0.9em;
          color: #a0a0a0;
          font-style: italic;
          margin-top: 1em;
        }

        .title {
          font-size: 1.2em;
          margin-bottom: 0.5em;
        }

        .title a {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};
