import './content.scss';

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

const Greeting = ({ text, name }) => {
  if (name) {
    return (
      <p>
        {`${text}, ${name}`}

!
      </p>
    );
  }
  return (
    <p>
      {text}

!
    </p>
  );
};

export const Content = () => (
  <section className="content content_appearence">
    <h2 className="content__title">main</h2>
    <div className="content__desc">
      <Greeting text={text} />
    </div>
  </section>
);
