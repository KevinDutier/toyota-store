import styles from "../styles/Section.module.css";

function ModelImage({ backgroundImage, header, description }) {
  return (
    <div
      className={styles.wrap}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.itemText}>
        <h1 style={{ color: "#f1f1f1" }}>{header}</h1>
        <p style={{ color: "#f1f1f1" }}>{description}</p>
      </div>
    </div>
  );
}

export default ModelImage;
