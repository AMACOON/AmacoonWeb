// src/components/forms/OwnerForm/viewModel.ts
import { useState, useEffect } from "react";
import { getOwner } from "../../../services/api"; 
import { Owner } from "../../../@types/owner";

export default function useOwnerForm(ownerId: number) {
  const [error, setError] = useState<string | null>(null);
  const [ownerData, setOwnerData] = useState<Owner | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOwner(ownerId); 
        setOwnerData(data);
      } catch (err) {
        setError('Failed to fetch owner data. Please try again.')
      }
    };

    fetchData();
  }, [ownerId]);  // re-run the effect if the ownerId changes

  return {
    error,
    ownerData
  };
}
