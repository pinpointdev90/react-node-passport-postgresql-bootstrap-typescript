import Layout from "../components/Layout";

function CreateReview() {
  return (
    <Layout>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title-label" className="form-label">
                    Review Title
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="title-label"
                    required
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description-label" className="form-label">
                    Review Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description-label"
                    rows={3}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="image-label" className="form-label">
                    Review Image
                  </label>
                  <input className="form-control" type="file" id="iamge-file" />
                </div>

                <button className="btn btn-success w-100">SAVE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateReview;
