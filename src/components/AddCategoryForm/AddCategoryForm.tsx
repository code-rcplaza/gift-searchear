import { SubmitHandler, useForm } from "react-hook-form";

type FormValuesType = {
  categorie: string;
};

interface AddCategorieFormProps {
  onAddCategorie: (categorie: string) => void;
}

const AddCategoryForm = ({ onAddCategorie }: AddCategorieFormProps) => {
  const { register, handleSubmit, reset } = useForm<FormValuesType>();

  const onSubmit: SubmitHandler<FormValuesType> = ({
    categorie,
  }: FormValuesType) => {
    onAddCategorie(categorie);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("categorie")} />
    </form>
  );
};

export default AddCategoryForm;
