import Content from "./Content";
import Header from "./Header";

import styles from "./styles.module.scss";

const NewStory: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default NewStory;
