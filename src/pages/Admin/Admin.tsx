import AddBouquetForm from "./AddBouquetForm";
import "./admin.scss";

const Admin: React.FC = () => {
  return (
    <div className="adminPage">
      <h1>Visteriya adminka</h1>
      <AddBouquetForm />
    </div>
  );
};
export default Admin;
