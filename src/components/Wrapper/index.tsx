import styles from "./wrapper.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
