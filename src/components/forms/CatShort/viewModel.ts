// src/components/forms/OwnerForm/viewModel.ts

import { useState, useEffect } from "react";
import { getCatShort, deleteCat, updateCat } from "../../../services/api"; 
import { CatShort } from "../../../@types/cat";

export default function useCatShortForm(ownerId: number) {
  const [error, setError] = useState<string | null>(null);
  const [catShortData, setCatShortData] = useState<CatShort[] | null>(null);
  const handleDelete = async (id: number) => {
    try {
      await deleteCat(id);
      setCatShortData(catShortData?.filter(cat => cat.ID !== id) || null); // atualiza a lista local de gatos após a exclusão
    } catch (err) {
      setError('Failed to delete the cat. Please try again.')
    }
  };

  // const handleUpdate = async (cat: CatShort) => {
  //   try {
  //     const updatedCat = await updateCat(cat);
  //     setCatShortData(catShortData?.map(c => c.id === cat.id ? updatedCat : c) || null); // atualiza a lista local de gatos após a atualização
  //   } catch (err) {
  //     setError('Failed to update the cat. Please try again.')
  //   }
  // };

  const handleUpdate = async (cat: CatShort) => {
    try {
      await updateCat(cat);
      setCatShortData(prev => prev ? prev.map(c => c.ID === cat.ID ? cat : c) : null);
    } catch (err) {
      setError('Failed to update the cat. Please try again.')
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCatShort(ownerId); 
        setCatShortData(data);
      } catch (err) {
        setError('Failed to fetch cat data. Please try again.')
      }
    };

    fetchData();
  }, [ownerId]);  // re-run the effect if the ownerId changes

  return {
    error,
    catShortData,
    handleDelete,
    handleUpdate
  };
}
