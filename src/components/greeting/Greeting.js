export const Greeting = ({ name }) => {
  const now = new Date().getHours();
  let text = 'Hello';

  if (now >= 22 || now < 3) {
    text = 'Good night';
  }
  if (now >= 3 && now < 12) {
    text = 'Good morning';
  }
  if (now >= 12 && now < 18) {
    text = 'Good afternoon';
  }
  if (now >= 18 && now < 22) {
    text = 'Good evening';
  }

  return (
    <p>
      {text}
      {name && `, ${name}`}

  !
    </p>
  );
};
