import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Amman,Irbid,Aqaba"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/R.e71b896c65242bf5dc13f7ccdf14f219?rik=EFiJkzBkrdKt7A&pid=ImgRaw&r=0"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Amman</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.enicbcmed.eu/sites/default/files/styles/social/public/2020-02/irbid_0.jpg?itok=IIq19IYq"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Irbid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/4e/aqaba.jpg?w=700&h=500&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Aqaba</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;