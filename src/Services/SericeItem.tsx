function SericeItem({ title, detail, icon, image }: any) {
  return (
    <div className="col-sm-4">
      <div className="main-box">
        <div className="service-box2"></div>
        <h6>{title}</h6>
        <img src={image} alt="" />
        <div className="service-box">
          <div className="iconbox">{icon}</div>
          <h6>{title}</h6>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default SericeItem;
