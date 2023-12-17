import AddCategoryModal from "./components/add-category-modal";
import CategoryTable from "./components/category-table";

const Category = async () => {
  return (
    <div className="flex flex-col h-full w-full justify-evenly  items-center">
      <AddCategoryModal />
      <CategoryTable />
    </div>
  );
};

export default Category;
