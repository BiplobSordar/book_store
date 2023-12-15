"use client";
import Button from "@/components/button";
import Modal from "@/components/modal";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import AddCategoryForm from "./add-category-form";

const AddCategoryModal = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("Success");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <Modal isOpen onClose={onClose} title="Create category">
          <AddCategoryForm onClose={onClose} />
        </Modal>
      )}
      <section className="w-full h-1/6 flex items-center justify-around">
        <div>
          <h1 className="text-gray-600 text-3xl">Categorys</h1>
          <p className="mt-3 text-gray-500">
            All The Categories Are Here In The Table
          </p>
        </div>
        <div>
          <Button onclick={onOpen} label="Add Category" />
        </div>
      </section>
    </>
  );
};

export default AddCategoryModal;
