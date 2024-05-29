import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const id = params.listingId;
  useEffect(() => {
    const getListing = async () => {
      setError(false);
      try {
        setLoading(true);

        const res = await axios.get(`/api/listing/get/${id}`);
        const data = res.data;
        if (data.success === false) {
          console.log(data.message);
          setLoading(false);
          setError(true);
          return;
        }

        setLoading(false);
        setListing(data.listing);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    getListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl text-red-500">
          Something went wrong
        </p>
      )}
      {listing && !loading && !error && (
        <>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </main>
  );
};

export default Listing;
