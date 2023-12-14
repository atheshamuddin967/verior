function SericeItem({ item }: any) {
  const maxCharacters = 200;
  const truncatedDescription =
    item.description.length > maxCharacters
      ? `${item.description.substring(0, maxCharacters)}...`
      : item.description;

  return (
    <div className="col-sm-4">
      <div className="main-box">
        <div className="iconBox">
          <img src={item.icon} alt="" />
        </div>
        <h5>{item.title}</h5>
        <div className="descrioption">
          <p>{truncatedDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default SericeItem;
