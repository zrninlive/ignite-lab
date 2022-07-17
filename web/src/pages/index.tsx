import { getAccessToken, getSession, useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = getSession(ctx.req, ctx.res);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: "/app",
      permanent: false,
    },
  };
};
