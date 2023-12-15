function SericeItem({ item }: any) {
  const maxWords = 200;
  const truncatedDescription =
    item.description.length > maxWords
      ? `${item.description.substring(0, maxWords)}...`
      : item.description;

  return (
    <div className="col-md-4 col-sm-6 mb-3 ">
      <div className="main-box " data-aos="fade-up">
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
