import React, { PropsWithChildren } from "react";
import classnames from "classnames";

interface LinkProps {
  url: string;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = (
  props: PropsWithChildren<LinkProps>
) => {
  return (
    <a href={props.url} className={classnames("block", "hover:text-white")}>
      {props.children}
    </a>
  );
};

const Links = () => {
  return (
    <div className="font-raleway select-none text-center md:text-right">
      <div className="font-semibold text-xl md:text-left">austin berke</div>
      <br />
      <Link url="https://harmonic.ai">harmonic</Link>
      <Link url="https://linkedin.com/in/austinberke">linkedin</Link>
      <Link url="https://github.com/austinberke">github</Link>
      <br />
      <Link url="https://instagram.com/austinyb">instagram</Link>
      <Link url="https://t.me/aybxyz">telegram</Link>
      <Link url="https://twitter.com/austinberke">twitter</Link>
      <br />
      <Link url="https://chickenandtheeggnyc.com">chicken & the egg</Link>
      <Link url="https://sincerelyophelianyc.com">sincerely, ophelia</Link>
      <Link url="https://eventually.nyc">eventually</Link>
      <br />
      <Link url="https://calendly.com/austin-berke-hl/30min">
        let's chat :-)
      </Link>
    </div>
  );
};

export default Links;
