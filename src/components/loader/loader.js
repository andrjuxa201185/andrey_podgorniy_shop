import './loader.scss';

export const Loader = isLoading => (
  <>
    {
      !isLoading && <div className="loader" />
    }
  </>
);
