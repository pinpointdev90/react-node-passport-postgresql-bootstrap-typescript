import { useNavigate } from "react-router-dom";

// Components
import Layout from "../components/Layout";
import ReviewCard from "../components/ReviewCard";

import Zoro from "../assets/zoro.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <>
        <div className="d-flex flex-row align-items-center justify-content-between mb-4">
          <h2 className="h2">
            <strong>Reviews</strong>
          </h2>
          <button
            className="btn btn-success"
            onClick={() => navigate("/create-review")}
          >
            New Review
          </button>
        </div>

        <div className="row gy-3 gx-3">
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
        </div>

        {/* <div className="modal-dialog modal-dialog-centered"></div> */}
      </>
    </Layout>
  );
}

export default Home;
