import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'bracelets': // items
        items[0] = { items:[], label: 'price-chart', title: 'Price Chart', url: '/items/price-chart'};
        items[1] = { items:[], label: 'weapons', title: 'Weapons', url: '/items/weapons'};
        items[2] = { items:[], label: 'shields', title: 'Shields', url: '/items/shields'};
        items[3] = { items:[], label: 'bracelets', title: 'Bracelets', url: '/items/bracelets'};
        items[4] = { items:[], label: 'grass', title: 'Grass', url: '/items/grass'};
        items[5] = { items:[], label: 'staves', title: 'Staves', url: '/items/staves'};
        items[6] = { items:[], label: 'scrolls', title: 'Scrolls', url: '/items/scrolls'};
        items[7] = { items:[], label: 'pots', title: 'Pots', url: '/items/pots'};
        items[8] = { items:[], label: 'food', title: 'Food', url: '/items/food'};
        items[9] = { items:[], label: 'projectiles', title: 'Projectiles', url: '/items/projectiles'};
        items[10] = { items:[], label: 'circuits', title: 'Circuits', url: '/items/circuits'};
        items[11] = { items:[], label: 'mon-box', title: 'Mon Box', url: '/items/mon-box'};
        items[12] = { items:[], label: 'skill-scrolls', title: 'Skill Scrolls', url: '/items/skill-scrolls'};
        items[13] = { items:[], label: 'other-items', title: 'Other', url: '/items/other-items'};
        break;
      case 'monsters': // system
        items[0] = { items:[], label: 'resonance', title: 'Resonance', url: '/system/resonance'};
        items[1] = { items:[], label: 'synthesis-seals', title: 'Seals', url: '/system/synthesis-seals'};
        items[2] = { items:[], label: 'secret-skills', title: 'Secret Skills', url: '/system/secret-skills'};
        items[3] = { items:[], label: 'monsters', title: 'Monsters', url: '/system/monsters'};
        items[4] = { items:[], label: 'traps', title: 'Traps', url: '/system/traps'};
        break;
      case 'bufu-trial': // dungeons
        items[0] = { items:[], label: 'tenrin-easy', title: 'Tenrin Easy', url: '/dungeons/tenrin-easy'};
        items[1] = { items:[], label: 'tenrin-hard', title: 'Tenrin Hard', url: '/dungeons/tenrin-hard'};
        items[2] = { items:[], label: 'kougas-hidden-hole', title: 'Kouga\'s Hole', url: '/dungeons/kougas-hidden-hole'};
        items[3] = { items:[], label: 'doras-trial', title: 'Doras', url: '/dungeons/doras-trial'};
        items[4] = { items:[], label: 'bufu-trial', title: 'Bufu', url: '/dungeons/bufu-trial'};
        items[5] = { items:[], label: 'murado-trial', title: 'Murado', url: '/dungeons/murado-trial'};
        items[6] = { items:[], label: 'kaka-roo-trial', title: 'Kaka Roo', url: '/dungeons/kaka-roo-trial'};
        items[7] = { items:[], label: 'gitau-trial', title: 'Gitau', url: '/dungeons/gitau-trial'};
        items[8] = { items:[], label: 'kron-trial', title: 'Kron', url: '/dungeons/kron-trial'};
        items[9] = { items:[], label: 'reeva-trial', title: 'Reeva', url: '/dungeons/reeva-trial'};
        items[10] = { items:[], label: 'star-shaft', title: 'Star Shaft', url: '/dungeons/star-shaft'};
        items[11] = { items:[], label: 'white-snake-isle', title: 'White Snake', url: '/dungeons/white-snake-isle'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
