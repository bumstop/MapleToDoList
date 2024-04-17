import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export function Layout():JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
