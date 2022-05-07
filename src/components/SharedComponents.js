import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Stack Food</title>
    </Helmet>
  );
};

export { PageTitle };
