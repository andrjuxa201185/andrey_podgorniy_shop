import './loader.scss';

export const Loader = ({ shown }) => (
  <>
    {
      shown && <div className="loader" />
    }
  </>
);
