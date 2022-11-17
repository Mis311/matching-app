import Head from "next/head";
import Image from "next/image";
import Leftbar from "../components/leftbar/Leftbar";
import Main from "../components/main/Main";
import Rightbar from "../components/rightbar/Rightbar";
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200&display=swap" rel="stylesheet"></link> */
}
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gaktoo App</title>
      </Head>

      <main className="flex space-y-5 space-x-7 ">
        <Leftbar />
          <div className="flex"></div>
            <Main />
            <Rightbar />
        <div></div>
      </main>

      <footer></footer>
    </div>
  );
}
