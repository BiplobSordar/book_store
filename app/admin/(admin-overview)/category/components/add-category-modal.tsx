"use client";
import Modal from "@/components/modal";
import AddCategoryForm from "./add-category-form";

const AddCategoryModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={`absolute h-full w-full ${open ? "visible" : "invisible"}`}>
      <Modal heading="Add Category" isOpen={open} onClose={onClose}>
        <AddCategoryForm />
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
