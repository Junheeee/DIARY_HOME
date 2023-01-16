import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  // 로그인 인증 방식 설정하기
  providers: [
    CredentialProvider({
      name: "로그인 해라",
      credentials: {
        userId: { label: "ID", type: "text", placeholder: "ID" },
        userPw: { label: "PASSWORD", type: "password" },
      },
      async authorize(credentails, req) {
        console.log(credentails, req);
        if (
          credentails.userId === "junh_eee" &&
          credentails.userPw === "1111"
        ) {
          const user = { id: 1, name: "test jun", email: "test@sample.com" };
          return user;
        }
        return null;
      },
    }),
  ],
  sercret: process.env.SECRET,
});
