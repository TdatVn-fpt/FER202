function ContentHeader({ title, description }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </>
  );
}

export default ContentHeader;
