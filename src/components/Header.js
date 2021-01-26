import { memo } from "react";
import { string } from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: string.isRequired
};

const HeaderMemo = memo(Header);
export { HeaderMemo as Header };
