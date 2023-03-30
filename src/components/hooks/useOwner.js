import { useState, useEffect } from "react";
import api from "../../api/Api";

const useOwner = (idExpositor) => {
  const [owner, setOwner] = useState({});

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const response = await api.get(`/owners/${idExpositor}`);
        setOwner(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOwner();
  }, [idExpositor]);

  return owner;
};

export default useOwner;
