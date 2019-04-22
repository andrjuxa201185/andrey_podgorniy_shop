export const RenderNums = ({
  from, to, odd, even
}) => {
  const items = [];
  const li = i => <li key={i}>{i}</li>;

  for (let i = from; i <= to; i++) {
    odd && i % 2 === 1 && items.push(li(i));
    even && i % 2 === 0 && items.push(li(i));
    !odd && !even && items.push(li(i));
  }

  return <ul>{items}</ul>;
};
