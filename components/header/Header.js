import { Rubik_Bubbles } from "next/font/google";

const fontTitle = Rubik_Bubbles({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <header>
      <h1 className={fontTitle.className}>Pawfect Companion</h1>
      <p>
        Unleash a Lifetime of Joy by Building an Unbreakable Bond with Your Best
        Friend, Creating a Happier and More Enjoyable Life for Both of You!
      </p>
    </header>
  );
}
