import { SubmitHandler, useForm } from "react-hook-form";

type FormValuesType = {
  category: string;
};

interface AddCategorieFormProps {
  onAddCategory: (categorie: string) => void;
}

const AddCategoryForm = ({ onAddCategory }: AddCategorieFormProps) => {
  const { register, handleSubmit, reset } = useForm<FormValuesType>();

  const onSubmit: SubmitHandler<FormValuesType> = ({
    category,
  }: FormValuesType) => {
    onAddCategory(category);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("category")} />
    </form>
  );
};

export default AddCategoryForm;
