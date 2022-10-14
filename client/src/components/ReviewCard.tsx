interface Props {
  title: string;
  author: string;
  description: string;
  image: string;
}

function ReviewCard({ title, author, description, image }: Props) {
  return (
    <div className="col-md-4">
      <div className="card w-full">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h5 className="card-title">{title}</h5>
            <p>
              <small className="text-muted">{author}</small>
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "justify" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
