import styles from './style.module.scss';

interface UserProps {
  name: string;
}

const UserCard = ({ name }: UserProps) => {
  return (
    <div className={styles.card}>
      <h1>Example Component</h1>
      <p>{name}</p>
    </div>
  );
};

export default UserCard;
