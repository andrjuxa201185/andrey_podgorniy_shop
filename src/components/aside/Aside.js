import './aside.scss';

const RenderNums = ({
  from, to, odd, even
}) => {
  const items = [];

  for (let i = +from; i <= to; i++) {
    odd && i % 2 === 1 && items.push(<li key={i}>{i}</li>);
    even && i % 2 === 0 && items.push(<li key={i}>{i}</li>);
    !odd && !even && items.push(<li key={i}>{i}</li>);
  }

  return <ul>{items}</ul>;
};

export const Aside = () => (
  <aside className="aside aside_appearence">
    <RenderNums from="2" to="19" odd />
  </aside>
);
