import React from "react";
import "./directory.style.scss";

import MenuItem from "../menu-item/menuitem.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "hats",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/kxkwQO5tMwEGviGNzb-gVBzXe6I88_4hmsuyEh_K_y0si7XbfYKlXtbbXbfjjiGcopzIAZP4BBmvwo8X862KFYuwW5USLDMAGSmDKBUSrMld93rZFx1PUIWzmPG22QSTPHO_VKUBAe3cwsfMVd8MHYbMchDIWNZekXih4MIrCStoE9K0vwp6hcRoknyBZsAtYWOm5wqp36cJMvZB2dcZlBkJqEcWiWJDam1gMmOqJHRh",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/l9l8kMuDm5ohWM729wYrgcpZfdl84m84RewrgDI_IMNxOEA6fU8zBtsp6RrGeSwJxFap4uvMayTdWdjEeFEEWD-fNzU8zvyVWsNjrEWNSekiJBYw3h0WTdWBFJ6aXNLQUGdReDcQkxHYdistNxMLK7d7pphtWrCe40qpZB92-Ozywu0wV9Bd8b-5xMH_KPb2yLq--Ekq55J9ws0imecSKNQdh0BDbroY-4F4KbTZx1f7",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://static.highsnobiety.com/thumbor/AtgJm2sPhxXbYXvsZcCtaK2YcQc=/1200x720/static.highsnobiety.com/wp-content/uploads/2019/09/04164635/custom-sneakers-good-bad-ugly-feature.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2019/02/05/USATODAY/usatsports/gettyimages-935715664.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "data:image/jpeg;base64,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",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, id, imageUrl, size }) => (
          <MenuItem
            title={title}
            key={id}
            imageUrl={imageUrl}
            size={size}
          ></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
